import { useState } from "react";
import "../App.css";
import CARD_DATA from "../assets/CARD_DATA.JSX";

function Cards() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, toggleFlipped] = useState(false);

  const handleNextCard = () => {
    if (currentCard < 10) {
      setCurrentCard(currentCard + 1);
    }
    if (isFlipped) {
      toggleFlipDirection();
    }
  };

  const handlePreviousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
    if (isFlipped) {
      toggleFlipDirection();
    }
  };

  const toggleFlipDirection = () => {
    toggleFlipped(!isFlipped);
  };

  return (
    <>
      <div className="cards-wrapper">
        <h1>Card Counter: {currentCard + 1}</h1>
        <h1>Is Flipped: {isFlipped ? "boof" : "off"}</h1>
        <div className="card-container" onClick={toggleFlipDirection}>
          <h1>
            {!isFlipped
              ? `${CARD_DATA[currentCard].question}`
              : `${CARD_DATA[currentCard].answer}`}
          </h1>
        </div>
        <div className="btn-container">
          <button onClick={handlePreviousCard} className="card-btn">
            ←
          </button>
          <button onClick={handleNextCard} className="card-btn">
            →
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
