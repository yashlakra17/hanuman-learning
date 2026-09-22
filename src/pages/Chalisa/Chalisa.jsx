import React, { useEffect, useState } from "react";
import "./Chalisa.css";

import VerseCard from "../../components/VerseCard/VerseCard";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import SpeakingPractice from "../../components/SpeakingPractice/SpeakingPractice";
import Translation from "../../components/Translation/Translation";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import chalisaData from "../../data/chalisa";

const Chalisa = () => {
  const [completedVerses, setCompletedVerses] = useState(() => {
    const savedProgress = localStorage.getItem(
      "hanumanChalisaCompleted"
    );

    return savedProgress
      ? JSON.parse(savedProgress)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "hanumanChalisaCompleted",
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
    <main className="chalisa-page">
      <section className="chalisa-header">
        <span className="chalisa-badge">
          🙏 श्री हनुमान चालीसा
        </span>

        <h1>Hanuman Chalisa</h1>

        <p>
          Read, listen, understand, and practice the Hanuman
          Chalisa verse by verse.
        </p>
      </section>

      <section className="chalisa-content">
        <ProgressBar
          current={completedCount}
          total={chalisaData.length}
        />

        <AudioPlayer
          title="Hanuman Chalisa"
          audioSrc="/audio/chalisa/hanuman-chalisa.mp3"
        />

        {chalisaData.map((verse) => (
          <div
            className="chalisa-verse"
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

export default Chalisa;