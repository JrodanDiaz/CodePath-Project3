/* eslint-disable react/prop-types */
import { useState } from "react";

export default function UserInput({
  correctAnswer,
  updateStreaks,
  resetStreak,
  isCorrect,
  setCorrectness,
}) {
  const [answer, setAnswer] = useState("");

  console.log(correctAnswer);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
    console.log(`Answer: ${e.target.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer == correctAnswer) {
      updateStreaks();
      //if inCorrect = true, the class "incorrect" is added to the text-input
    } else {
      resetStreak();
      setCorrectness(false);
    }
  };

  return (
    <div className="user-input-wrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Answer"
          className={`ans-input ${!isCorrect ? `incorrect` : ``}`}
          onChange={handleAnswerChange}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
