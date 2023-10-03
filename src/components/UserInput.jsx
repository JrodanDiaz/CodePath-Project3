/* eslint-disable react/prop-types */
import { useState } from "react";

export default function UserInput({
  correctAnswer,
  updateStreaks,
  resetStreak,
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
    } else {
      resetStreak();
    }
  };

  return (
    <div className="user-input-wrapper">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Answer"
          className="ans-input"
          onChange={handleAnswerChange}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
