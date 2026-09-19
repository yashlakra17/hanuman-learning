import React, { useEffect, useRef, useState } from "react";
import "./VerseCard.css";

const VerseCard = ({ verse }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(0.75);
  const [voices, setVoices] = useState([]);

  const audioRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();

      const hindiVoices = availableVoices.filter((voice) =>
        voice.lang.toLowerCase().startsWith("hi")
      );

      setVoices(hindiVoices);
    };

    loadVoices();

    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const stopCurrentAudio = () => {
    window.speechSynthesis.cancel();

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleRealAudio = () => {
    if (!audioRef.current) return;

    window.speechSynthesis.cancel();

    audioRef.current.playbackRate = 1;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsPaused(false);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  };

  const handleAudioPause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();

    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleAudioResume = () => {
    if (!audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsPaused(false);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  };

  const handleSpeak = (selectedSpeed) => {
    stopCurrentAudio();

    setSpeed(selectedSpeed);

    const speech = new SpeechSynthesisUtterance(verse.hindi);

    speech.lang = "hi-IN";
    speech.rate = selectedSpeed;
    speech.pitch = 1;

    if (voices.length > 0) {
      speech.voice = voices[0];
    }

    speech.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    speech.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    speech.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(speech);
  };

  const handleListen = () => {
    if (verse.audio) {
      handleRealAudio();
    } else {
      handleSpeak(0.75);
    }
  };

  const handlePause = () => {
    if (verse.audio) {
      handleAudioPause();
    } else {
      window.speechSynthesis.pause();

      setIsPlaying(false);
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (verse.audio) {
      handleAudioResume();
    } else {
      window.speechSynthesis.resume();

      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    stopCurrentAudio();
  };

  return (
    <div className="verse-card">
      <audio
        ref={audioRef}
        src={verse.audio}
        preload="metadata"
        onEnded={() => {
          setIsPlaying(false);
          setIsPaused(false);
        }}
      />

      <div className="verse-card-header">
        <span className="verse-number">{verse.id}</span>

        <span className="verse-type">{verse.type}</span>
      </div>

      <div className="verse-hindi">
        {verse.hindi}
      </div>

      <div className="verse-english">
        {verse.english}
      </div>

      <div className="verse-card-actions">
        {!isPlaying && !isPaused && (
          <>
            <button
              className="verse-btn listen-btn"
              onClick={handleListen}
            >
              🔊 Listen
            </button>

            <button
              className="verse-btn practice-btn"
              onClick={() => handleSpeak(0.5)}
            >
              🗣️ Slow Practice
            </button>
          </>
        )}

        {isPlaying && (
          <button
            className="verse-btn pause-btn"
            onClick={handlePause}
          >
            ⏸ Pause
          </button>
        )}

        {isPaused && (
          <button
            className="verse-btn listen-btn"
            onClick={handleResume}
          >
            ▶ Resume
          </button>
        )}

        {(isPlaying || isPaused) && (
          <button
            className="verse-btn stop-btn"
            onClick={handleStop}
          >
            ⏹ Stop
          </button>
        )}
      </div>

      {isPlaying && (
        <div className="verse-playing">
          🔊 Playing...
        </div>
      )}

      {isPaused && (
        <div className="verse-playing">
          ⏸ Paused
        </div>
      )}
    </div>
  );
};

export default VerseCard;