import React from "react";
import "./Chalisa.css";

import VerseCard from "../../components/VerseCard/VerseCard";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import SpeakingPractice from "../../components/SpeakingPractice/SpeakingPractice";
import Translation from "../../components/Translation/Translation";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import chalisaData from "../../data/chalisa";

const Chalisa = () => {
  return (
    <main className="chalisa-page">
      <section className="chalisa-header">
        <span className="chalisa-badge">🙏 श्री हनुमान चालीसा</span>

        <h1>Hanuman Chalisa</h1>

        <p>
          Read, listen, understand, and practice the Hanuman Chalisa verse by
          verse.
        </p>
      </section>

      <section className="chalisa-content">
        <ProgressBar current={1} total={chalisaData.length} />

        <AudioPlayer
          title="Hanuman Chalisa"
          audioSrc="/audio/chalisa/hanuman-chalisa.mp3"
        />
        {chalisaData.map((verse) => (
          <div className="chalisa-verse" key={verse.id}>
            <VerseCard verse={verse} />

            <Translation hindi={verse.hindi} english={verse.english} />

            <SpeakingPractice verse={verse} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Chalisa;
