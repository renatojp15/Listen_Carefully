import { useState } from "react";
import lesson1 from "../data/lesson1";

export default function WordDictation() {
  const [playingWord, setPlayingWord] = useState(null);

  const playAudioThreeTimes = async (word) => {
    setPlayingWord(word);
    const audio = new Audio(`/audios/${word.toLowerCase()}.mp3`);

    for (let i = 0; i < 3; i++) {
      await new Promise((resolve) => {
        audio.currentTime = 0;
        audio.play();
        audio.onended = () => setTimeout(resolve, 500); // 0.5s pausa
      });
    }

    setPlayingWord(null);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Word Dictation
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {lesson1.words.map((word, index) => (
          <button
            key={index}
            onClick={() => playAudioThreeTimes(word)}
            className={`px-4 py-2 rounded-lg shadow font-medium transition ${
              playingWord === word
                ? "bg-blue-400 text-white"
                : "bg-gray-200 hover:bg-blue-100"
            }`}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
}