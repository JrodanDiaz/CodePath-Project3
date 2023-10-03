import { useState } from "react";
import "../App.css";
import CARD_DATA from "../assets/CARD_DATA.JSX";
import UserInput from "./UserInput";

// eslint-disable-next-line react/prop-types
function Cards({ updateStreaks, resetStreak }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, toggleFlipped] = useState(false);
  const [randomOrder, setRandomOrder] = useState([0, ...getRandomArray(1, 10)]); //Creates shuffled array, with the first index always equal to zero
  const [isCorrect, setCorrectness] = useState(true);

  const difficulty = CARD_DATA[randomOrder[currentCard]].difficulty;

  function getRandomArray(min, max) {
    const numbers = [];

    // Fill the array with numbers from min to max
    for (let i = min; i <= max; i++) {
      numbers.push(i);
    }

    // Shuffle the array to randomize the order
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements
    }

    return numbers;
  }

  const handleNextCard = () => {
    setCorrectness(true);
    if (currentCard < CARD_DATA.length - 1) {
      setCurrentCard(currentCard + 1);
    }
    if (isFlipped) {
      toggleFlipDirection();
    }
  };

  const handlePreviousCard = () => {
    setCorrectness(true);
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
    if (isFlipped) {
      toggleFlipDirection();
    }
  };

  //Displays the original "START" card
  const handleRefresh = () => {
    setCurrentCard(0);
    setCorrectness(true);
    setRandomOrder([0, ...getRandomArray(1, 10)]);
    if (isFlipped) {
      toggleFlipDirection();
    }
  };

  const toggleFlipDirection = () => {
    toggleFlipped((flipped) => !flipped);
  };

  return (
    <>
      <div className="cards-wrapper">
        <h1>Card #{randomOrder[currentCard]}</h1>
        <div
          className={`card-container ${difficulty}`}
          onClick={toggleFlipDirection}
        >
          {/* If the current card object's image value is not null, AND the card is flipped, THEN display the image */}
          {CARD_DATA[currentCard].img && isFlipped && (
            <img id="card-img" src={CARD_DATA[currentCard].img} />
          )}
          <h1>
            {!isFlipped
              ? `${CARD_DATA[randomOrder[currentCard]].question}`
              : `${CARD_DATA[randomOrder[currentCard]].answer}`}
          </h1>
        </div>
        <div className="btn-container">
          <button onClick={handleRefresh} className="card-btn">
            &#8634;
          </button>
          <button onClick={handlePreviousCard} className="card-btn">
            ←
          </button>
          <button onClick={handleNextCard} className="card-btn">
            →
          </button>
        </div>
        <div className="btn-container">
          <UserInput
            correctAnswer={CARD_DATA[randomOrder[currentCard]].answer}
            updateStreaks={updateStreaks}
            resetStreak={resetStreak}
            isCorrect={isCorrect}
            setCorrectness={setCorrectness}
          />
        </div>
      </div>
    </>
  );
}

export default Cards;
