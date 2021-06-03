import React from "react";

export default function Question({
  questionNumber,
  currentQuestion,
  questionCategory,
  difficulty,
}) {
  return (
    <div>
      <p>{questionNumber}</p>
      <p>{currentQuestion}</p>
      <p>{questionCategory}</p>
      <p>{difficulty}</p>
    </div>
  );
}
