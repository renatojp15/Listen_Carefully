// src/components/PracticeView.jsx
import { useState } from "react";
import WordPlayer from "./WordPlayer";
import ParagraphPlayer from "./ParagraphPlayer";

export default function PracticeView({ lesson, onBack }) {
  const [step, setStep] = useState("words");

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Practice - {lesson.title || "Lección"}</h1>
        {onBack && (
          <button
            onClick={onBack}
            className="bg-gray-400 text-white px-3 py-1 rounded"
          >
            ⬅️ Volver
          </button>
        )}
      </div>

      {step === "words" ? (
        <WordPlayer
          words={lesson.words}
          onNext={() => setStep("paragraph")}
        />
      ) : (
        <ParagraphPlayer
          paragraphAudio={lesson.paragraphAudio}
          correctText={lesson.paragraphText}
        />
      )}
    </div>
  );
}