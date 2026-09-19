import React from "react";
import "./Baan.css";

import VerseCard from "../../components/VerseCard/VerseCard";
import Translation from "../../components/Translation/Translation";
import SpeakingPractice from "../../components/SpeakingPractice/SpeakingPractice";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import baanData from "../../data/baan";

const Baan = () => {
  return (
    <main className="baan-page">
      <section className="baan-header">
        <span className="baan-badge">🙏 श्री हनुमान बाण</span>

        <h1>Hanuman Baan</h1>

        <p>Read, understand, and practice the Hanuman Baan verse by verse.</p>
      </section>

      <section className="baan-content">
        <ProgressBar current={1} total={baanData.length} />
        <AudioPlayer
          title="Hanuman Baan"
          text={baanData.map((verse) => verse.hindi).join(" ")}
        />
        {baanData.map((verse) => (
          <div className="baan-verse" key={verse.id}>
            <VerseCard verse={verse} />

            <Translation hindi={verse.hindi} english={verse.english} />

            <SpeakingPractice verse={verse} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Baan;
