import { useState } from "react";
import "./style.css";
import rockPaperScissors from "../../RockPaperScissors";
import Home from "../Home/Home";
import Play from "../Play/Play";
//import { FuncWithOneParam } from "../../types";

const Game = ({ handleScore }: { handleScore: (res: number) => void }) => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playGame, setPlayGame] = useState(false);
  const [result, setResult] = useState(0);

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[randomIndex];
  };

  const determineWinner = (
    p_playerChoice: string,
    p_computerChoice: string
  ) => {
    if (p_playerChoice === p_computerChoice) return "draw";

    if (
      (p_playerChoice === "paper" && p_computerChoice === "rock") ||
      (p_playerChoice === "rock" && p_computerChoice === "scissors") ||
      (p_playerChoice === "scissors" && p_computerChoice === "paper")
    )
      return "win";

    return "lose";
  };

  //  console.log[rockPaperScissors.map(test) => (test.image)];

  const handlePlayerChoice = (_playerChoice: string) => {
    const randomChoice = getRandomChoice().name;

    setPlayerChoice(_playerChoice);
    setComputerChoice(randomChoice);

    const resultString = determineWinner(_playerChoice, randomChoice);
    const f_result: number =
      resultString === "win" ? 1 : resultString === "lose" ? -1 : 0;

    console.log(resultString);
    setResult(f_result);

    //if (f_result != 0)
    handleScore(f_result);
  };

  const handlePlayGame = (_playerChoice: string) => {
    setPlayGame(!playGame);
    if (!playGame) {
      handlePlayerChoice(_playerChoice);
    }
  };
  //console.log(getRandomChoice());

  return (
    <div
      className={`container mt-12 lg:mt-4 p-4 flex flex-col items-center ${
        playGame ? "playing" : ""
      }`}
    >
      {!playGame ? (
        <Home
          rockPaperScissors={rockPaperScissors}
          handlePlayGame={handlePlayGame}
        />
      ) : (
        <Play
          handlePlayGame={handlePlayGame}
          result={result}
          p_playerChoice={playerChoice}
          p_computerChoice={computerChoice}
        />
      )}
    </div>
  );
};

export default Game;
