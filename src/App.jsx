import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Cards />
    </>
  );
}

export default App;
