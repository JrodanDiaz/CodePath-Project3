import { useState } from "react";
import "../App.css";
import CARD_DATA from "../assets/CARD_DATA.JSX";

function Cards() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, toggleFlipped] = useState(false);

  const difficulty = CARD_DATA[currentCard].difficulty;

  const handleNextCard = () => {
    if (currentCard < 10) {
      setCurrentCard((card) => card + 1);
    }
    if (isFlipped) {
      toggleFlipDirection();
    }
  };

  const handlePreviousCard = () => {
    if (currentCard > 0) {
      setCurrentCard((card) => card - 1);
    }
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
        <h1>Card Counter: {currentCard + 1}</h1>
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
