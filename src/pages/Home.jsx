// src/pages/Home.jsx
import { useState } from "react";
import PracticeView from "../components/PracticeView";
import lesson1 from "../data/lesson1"; // Por ahora solo una lección

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    { id: 1, title: "Lección 1", data: lesson1 },
    // En el futuro: { id: 2, title: "Lección 2", data: lesson2 }
  ];

  if (selectedLesson) {
    return (
      <PracticeView
        lesson={selectedLesson.data}
        onBack={() => setSelectedLesson(null)}
      />
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-center">Selecciona una Lección</h1>

      <ul className="space-y-3">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <button
              onClick={() => setSelectedLesson(lesson)}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700"
            >
              {lesson.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}