import BlackStrat from "../assets/blackstrat.png";
import LesPaul from "../assets/lespaul.png";

export default function Header({ currentStreak, longestStreak }) {
  return (
    <>
      <div className="header-wrapper">
        <img src={BlackStrat} id="strat" />
        <div className="header">
          <h1>
            The <span>Ultimate</span> Guitar Test
          </h1>
          <h2>
            How much of a guitar enthusiast are you? Test your knowledge of
            guitar and music history
          </h2>
          <h3>Number of cards: 11</h3>
          <h3>
            Current Streak: {currentStreak} | Longest Streak: {longestStreak}
          </h3>
        </div>
        <img src={LesPaul} id="les-paul" />
      </div>
    </>
  );
}
