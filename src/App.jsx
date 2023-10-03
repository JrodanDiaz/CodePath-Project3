import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const incrementStreak = () => {
    setCurrentStreak((prevStreak) => prevStreak + 1);
  };

  const updateLongestStreak = () => {
    if (currentStreak > longestStreak) {
      setLongestStreak(currentStreak);
    }
  };

  const updateStreaks = () => {
    incrementStreak();
    updateLongestStreak();
  };

  const resetStreak = () => {
    setCurrentStreak(0);
  };

  return (
    <>
      <Header currentStreak={currentStreak} longestStreak={longestStreak} />
      <Cards updateStreaks={updateStreaks} resetStreak={resetStreak} />
    </>
  );
}

export default App;
