import { useState } from "react";
import "../App.css";
import CARD_DATA from "../assets/CARD_DATA.JSX";

function Cards() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, toggleFlipped] = useState(false);
  const [prevCard, setPrevCard] = useState(0);

  const difficulty = CARD_DATA[currentCard].difficulty;

  let randomNum = 0;

  // Ensures that the same number cannot be random generated consecutively
  const generateUniqueRandom = () => {
    randomNum = 1 + Math.round(Math.random() * 9);
    while (randomNum === prevCard) {
      randomNum = 1 + Math.round(Math.random() * 9);
    }
  };

  const handleNextCard = () => {
    generateUniqueRandom();
    setCurrentCard((c) => randomNum);
    setPrevCard(randomNum);
    if (isFlipped) {
      toggleFlipDirection();
    }
  };

  //Displays the original "START" card
  const handleRefresh = () => {
    setCurrentCard(0);
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
        <h1>Card #{currentCard + 1}</h1>
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
          <button onClick={handleRefresh} className="card-btn">
            &#8634;
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
