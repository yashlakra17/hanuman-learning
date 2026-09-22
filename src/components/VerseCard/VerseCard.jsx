import React, { useEffect, useRef, useState } from "react";
import "./VerseCard.css";

const VerseCard = ({ verse, onComplete, isCompleted }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(0.75);
  const [voices, setVoices] = useState([]);

  const audioRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices =
        window.speechSynthesis.getVoices();

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

  /*
    Individual verse audio files are not currently stored.
    Therefore, individual verses use Hindi speech synthesis.
    The complete Chalisa/Baan audio is handled by AudioPlayer.
  */
  const handleSpeak = (selectedSpeed) => {
    stopCurrentAudio();

    setSpeed(selectedSpeed);

    const speech = new SpeechSynthesisUtterance(
      verse.hindi
    );

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
    handleSpeak(0.75);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();

    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleResume = () => {
    window.speechSynthesis.resume();

    setIsPlaying(true);
    setIsPaused(false);
  };

  const handleStop = () => {
    stopCurrentAudio();
  };

  const handleComplete = () => {
    if (onComplete && !isCompleted) {
      onComplete(verse.id);
    }
  };

  return (
    <div className="verse-card">
      <audio
        ref={audioRef}
        preload="metadata"
        onEnded={() => {
          setIsPlaying(false);
          setIsPaused(false);
        }}
      />

      <div className="verse-card-header">
        <span className="verse-number">
          {verse.id}
        </span>

        <span className="verse-type">
          {verse.type}
        </span>
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

        {onComplete && !isCompleted && (
          <button
            className="verse-btn complete-btn"
            onClick={handleComplete}
          >
            ✅ Mark Complete
          </button>
        )}

        {isCompleted && (
          <div className="completed-message">
            ✅ Completed
          </div>
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