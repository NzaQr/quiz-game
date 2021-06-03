import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import data from "./data";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = currentQuestion + 1;

  const [score, setScore] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [correct, setCorrect] = useState(false);
  const [points, setPoints] = useState(0);

  const handleClick = (correctAnswer) => {
    if (nextQuestion < data.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setShowFeedback(false);
        setCorrect(false);
        console.log(showFeedback);
      }, 1000);
    } else {
      setTimeout(() => {
        setScore(true);
      }, 1000);
    }

    if (correctAnswer) {
      setPoints(points + 5);
      setShowFeedback(true);
      setFeedback("Correct!");
      setCorrect(true);
    } else {
      setShowFeedback(true);
      setFeedback("Incorrect!");
    }
  };

  return (
    <div className="App">
      {score ? (
        <div>Your score is: {points}</div>
      ) : (
        <>
          <Question
            currentQuestion={data[currentQuestion].questionText}
            questionNumber={`${currentQuestion + 1} / ${data.length}`}
          />
          <div>
            {data[currentQuestion].answerOptions.map((answerOptions, index) => (
              <button
                key={index}
                onClick={() => handleClick(answerOptions.isCorrect)}
                className={correct && answerOptions.isCorrect ? "correct" : ""}
                disabled={showFeedback}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>
          {showFeedback && <div>{feedback}</div>}
        </>
      )}
    </div>
  );
}

export default App;
