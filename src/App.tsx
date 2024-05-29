import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);

  const handleScoreChange = (point: number) => {
    setScore((prevScore) => Math.max(prevScore + point, 0));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Header score={score} />
      <Game handleScore={handleScoreChange} />
      <Footer />
    </div>
  );
}

export default App;
