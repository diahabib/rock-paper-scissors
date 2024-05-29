import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import { useEffect, useState } from "react";
function App() {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore !== null ? parseInt(savedScore, 10) : 0;
  });

  const handleScoreChange = (point: number) => {
    setScore((prevScore) => {
      const newScore = Math.max(prevScore + point, 0);
      localStorage.setItem("score", newScore.toString());
      return newScore;
    });
  };

  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore !== null) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header score={score} />
      <Game handleScore={handleScoreChange} />
      <Footer />
    </div>
  );
}

export default App;
