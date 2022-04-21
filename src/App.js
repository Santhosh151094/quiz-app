import React, { useState } from "react";
import StartScreen from "./StartScreen";

export default function App() {
  const [quizStart, setQuizStart] = useState(false);
  return (
    <div>
      {quizStart ? (
        <StartScreen />
      ) : (
        <div>
          <button onClick={() => setQuizStart(true)}>Start Quiz</button>
        </div>
      )}
    </div>
  );
}
