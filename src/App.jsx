import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Hello, Word Dictation!
        </h1>
        <p className="text-lg text-gray-700">
          Tailwind CSS está funcionando correctamente 💪
        </p>
        <button className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow">
          ¡Empezar!
        </button>
      </div>
    </>
  )
}

export default App
