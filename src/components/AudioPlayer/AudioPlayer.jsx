import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ title = "Hanuman Chalisa", audioSrc }) => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);

      audio.removeEventListener("timeupdate", handleTimeUpdate);

      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const formatTime = (time) => {
    if (!time || isNaN(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handlePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.playbackRate = speed;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsPaused(false);
      })
      .catch((error) => {
        console.error("Audio could not be played:", error);
      });
  };

  const handlePause = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleResume = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsPaused(false);
      })
      .catch((error) => {
        console.error("Audio could not resume:", error);
      });
  };

  const handleStop = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    setCurrentTime(0);
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);

    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
  };

  const handleProgressChange = (event) => {
    const audio = audioRef.current;

    if (!audio || !duration) return;

    const newTime = Number(event.target.value);

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="audio-info">
        <span className="audio-icon">🔊</span>

        <div>
          <h3>{title}</h3>

          <p>
            {isPlaying
              ? `Playing at ${speed}x speed`
              : isPaused
                ? "Paused"
                : `Listen to ${title}`}
          </p>
        </div>
      </div>

      <div className="audio-progress">
        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          style={{
            "--progress": `${progress}%`,
          }}
        />

        <span>{formatTime(duration)}</span>
      </div>

      <div className="audio-controls">
        <div className="speed-controls">
          <span>Speed:</span>

          <button
            className={speed === 0.5 ? "active-speed" : ""}
            onClick={() => handleSpeedChange(0.5)}
          >
            0.5x
          </button>

          <button
            className={speed === 0.75 ? "active-speed" : ""}
            onClick={() => handleSpeedChange(0.75)}
          >
            0.75x
          </button>

          <button
            className={speed === 1 ? "active-speed" : ""}
            onClick={() => handleSpeedChange(1)}
          >
            1x
          </button>
        </div>

        <div className="audio-action-buttons">
          {!isPlaying && !isPaused && (
            <button className="audio-play-btn" onClick={handlePlay}>
              ▶ Play
            </button>
          )}

          {isPlaying && (
            <button className="audio-play-btn" onClick={handlePause}>
              ⏸ Pause
            </button>
          )}

          {isPaused && (
            <button className="audio-play-btn" onClick={handleResume}>
              ▶ Resume
            </button>
          )}

          {(isPlaying || isPaused) && (
            <button className="audio-stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
