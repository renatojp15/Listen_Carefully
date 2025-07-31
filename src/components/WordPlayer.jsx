import { useState } from "react";

export default function WordPlayer({ words, onNext }) {
  const [current, setCurrent] = useState(0);

  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Dictado de Palabras</h2>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => playAudio(words[current].audio)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          ▶️ Reproducir Palabra
        </button>

        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1 < words.length ? prev + 1 : prev))
          }
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Siguiente
        </button>
      </div>

      <div className="text-xl font-bold text-center">
        {words[current].word}
      </div>

      <div className="text-center text-gray-600">
        Palabra {current + 1} de {words.length}
      </div>

      {current === words.length - 1 && (
        <button
          onClick={onNext}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded"
        >
          Continuar con el Párrafo
        </button>
      )}
    </div>
  );
}