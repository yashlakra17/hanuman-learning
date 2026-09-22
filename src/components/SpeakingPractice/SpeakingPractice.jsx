import React, { useEffect, useRef, useState } from "react";
import "./SpeakingPractice.css";

const SpeakingPractice = ({ verse }) => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [matchPercentage, setMatchPercentage] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError(
        "Speech recognition is not supported in this browser. Please use Chrome or Edge."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "hi-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setError("");
      setFeedback("");
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;

      setSpokenText(result);

      calculateMatch(result, verse?.hindi);
    };

    recognition.onerror = (event) => {
      setIsListening(false);

      if (event.error === "not-allowed") {
        setError(
          "Microphone permission was denied. Please allow microphone access."
        );
      } else if (event.error === "no-speech") {
        setError(
          "No speech detected. Please speak clearly and try again."
        );
      } else if (event.error === "network") {
        setError(
          "Speech recognition needs an internet connection in this browser."
        );
      } else {
        setError(
          "Could not recognize your speech. Please try again."
        );
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [verse]);

  /*
    Convert Hindi text into clean words.

    We:
    - remove punctuation
    - remove Hindi danda
    - remove extra spaces
    - keep Hindi characters
  */
  const normalizeText = (text) => {
    if (!text) return [];

    return text
      .toLowerCase()
      .replace(/[।॥,!?;:"'‘’“”(){}\[\]<>]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean);
  };

  /*
    Compare the spoken words with the original words.

    Instead of checking only whether a word exists,
    we compare the words in their actual order.
  */
  const calculateMatch = (spoken, original) => {
    if (!spoken || !original) return;

    const spokenWords = normalizeText(spoken);
    const originalWords = normalizeText(original);

    if (
      spokenWords.length === 0 ||
      originalWords.length === 0
    ) {
      setMatchPercentage(0);
      setFeedback("Please speak the verse clearly.");
      return;
    }

    let matchedWords = 0;
    let originalIndex = 0;

    spokenWords.forEach((spokenWord) => {
      /*
        Look for the spoken word starting from the
        current position in the original verse.
      */
      for (
        let i = originalIndex;
        i < originalWords.length;
        i++
      ) {
        if (spokenWord === originalWords[i]) {
          matchedWords++;
          originalIndex = i + 1;
          break;
        }
      }
    });

    /*
      Score is based on the original verse length.
      This prevents saying only one easy word from
      producing an unnecessarily high score.
    */
    const percentage = Math.round(
      (matchedWords / originalWords.length) * 100
    );

    const finalPercentage = Math.min(
      Math.max(percentage, 0),
      100
    );

    setMatchPercentage(finalPercentage);

    if (finalPercentage >= 90) {
      setFeedback(
        "Excellent! Your recitation is very close. 🙏"
      );
    } else if (finalPercentage >= 75) {
      setFeedback(
        "Very good! A little more practice will make it even better."
      );
    } else if (finalPercentage >= 50) {
      setFeedback(
        "Good attempt! Try speaking slowly and follow the verse order."
      );
    } else if (finalPercentage >= 25) {
      setFeedback(
        "Keep practicing. Listen once and then try speaking slowly."
      );
    } else {
      setFeedback(
        "Try again slowly and clearly, one part of the verse at a time."
      );
    }
  };

  const startPractice = () => {
    if (!recognitionRef.current) {
      setError(
        "Speech recognition is not supported in this browser."
      );
      return;
    }

    setSpokenText("");
    setMatchPercentage(null);
    setFeedback("");
    setError("");

    try {
      recognitionRef.current.start();
    } catch (error) {
      console.log("Speech recognition error:", error);
    }
  };

  const stopPractice = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    setIsListening(false);
  };

  return (
    <div className="speaking-practice">
      <div className="practice-header">
        <div>
          <h3>🗣️ Speaking Practice</h3>

          <p>
            Speak the verse and compare your recitation
          </p>
        </div>

        <span className="practice-status">
          {isListening ? "Listening..." : "Practice"}
        </span>
      </div>

      <div className="practice-text">
        {verse?.hindi || "Your verse will appear here"}
      </div>

      <div className="practice-actions">
        {!isListening ? (
          <button
            className="start-practice-btn"
            onClick={startPractice}
          >
            🎤 Start Practice
          </button>
        ) : (
          <button
            className="stop-practice-btn"
            onClick={stopPractice}
          >
            🛑 Stop Listening
          </button>
        )}
      </div>

      {isListening && (
        <div className="listening-status">
          🎙️ Listening... Speak the verse now.
        </div>
      )}

      {spokenText && (
        <div className="spoken-result">
          <h4>📝 You said:</h4>

          <p>{spokenText}</p>
        </div>
      )}

      {matchPercentage !== null && (
        <div className="match-result">
          <h4>📊 Recitation Match</h4>

          <div className="match-score">
            {matchPercentage}%
          </div>

          <p>{feedback}</p>
        </div>
      )}

      {error && (
        <div className="practice-error">
          ⚠️ {error}
        </div>
      )}

      {!spokenText && !isListening && !error && (
        <p className="practice-note">
          Speak the Hindi verse clearly after pressing
          Start Practice.
        </p>
      )}
    </div>
  );
};

export default SpeakingPractice;