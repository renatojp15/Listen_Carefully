import { useState } from "react";

export default function ParagraphPlayer({ paragraphAudio, correctText }) {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    const normalizedInput = text.trim().toLowerCase();
    const normalizedCorrect = correctText.trim().toLowerCase();

    if (normalizedInput === normalizedCorrect) {
      setFeedback("✅ ¡Correcto!");
    } else {
      setFeedback("❌ Intenta de nuevo.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Dictado de Párrafo</h2>

      <button
        onClick={() => new Audio(paragraphAudio).play()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        ▶️ Escuchar Párrafo
      </button>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="w-full p-2 border rounded"
        placeholder="Escribe lo que escuchaste..."
      />

      <button
        onClick={checkAnswer}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Verificar
      </button>

      {feedback && (
        <div
            className={`text-lg font-medium ${
            feedback.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
        >
            {feedback}
        </div>
        )}
    </div>
  );
}