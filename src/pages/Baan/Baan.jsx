import React, { useEffect, useState } from "react";
import "./Baan.css";

import VerseCard from "../../components/VerseCard/VerseCard";
import Translation from "../../components/Translation/Translation";
import SpeakingPractice from "../../components/SpeakingPractice/SpeakingPractice";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

import baanData from "../../data/baan";

const Baan = () => {
  const [completedVerses, setCompletedVerses] = useState(() => {
    const savedProgress = localStorage.getItem(
      "hanumanBaanCompleted"
    );

    return savedProgress
      ? JSON.parse(savedProgress)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "hanumanBaanCompleted",
      JSON.stringify(completedVerses)
    );
  }, [completedVerses]);

  const handleComplete = (verseId) => {
    setCompletedVerses((previous) => {
      if (previous.includes(verseId)) {
        return previous;
      }

      return [...previous, verseId];
    });
  };

  const completedCount = completedVerses.length;

  return (
    <main className="baan-page">
      <section className="baan-header">
        <span className="baan-badge">
          🙏 श्री हनुमान बाण
        </span>

        <h1>Hanuman Baan</h1>

        <p>
          Read, understand, and practice the Hanuman Baan
          verse by verse.
        </p>
      </section>

      <section className="baan-content">
        <ProgressBar
          current={completedCount}
          total={baanData.length}
        />

        <AudioPlayer
          title="Hanuman Baan"
          audioSrc="/audio/baan/hanuman-baan.mp3"
        />

        {baanData.map((verse) => (
          <div
            className="baan-verse"
            key={verse.id}
          >
            <VerseCard
              verse={verse}
              onComplete={handleComplete}
              isCompleted={completedVerses.includes(verse.id)}
            />

            <Translation
              hindi={verse.hindi}
              hindEnglish={verse.hindEnglish}
              english={verse.english}
            />

            <SpeakingPractice verse={verse} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Baan;