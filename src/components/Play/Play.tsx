import { useEffect, useState } from "react";
import rockPaperScissors from "../../RockPaperScissors";
const Play = ({
  handlePlayGame,
  result,
  p_playerChoice,
  p_computerChoice,
}: {
  handlePlayGame: (_choice: string) => void;
  result: number;
  p_playerChoice: string;
  p_computerChoice: string;
}) => {
  //const [choices, setChoices] = useState();
  const choices = [
    rockPaperScissors.find((choice) => choice.name === p_playerChoice),
    rockPaperScissors.find((choice) => choice.name === p_computerChoice),
  ];
  const [choicesRevealed, setChoicesRevealed] = useState(false);

  useEffect(() => {
    setChoicesRevealed(true);
  }, []);
  /*
  useEffect(() => {
    const player =
      rockPaperScissors.find((choice) => choice.name === p_playerChoice) ||
      rockPaperScissors[0];
    const computer =
      rockPaperScissors.find((choice) => choice.name === p_computerChoice) ||
      rockPaperScissors[0];
    setChoices([player, computer]);
  }, [p_playerChoice, p_computerChoice]);
  */
  console.log(choices);
  return (
    <>
      <div className="flex flex-col">
        <div
          className={`flex justify-between gap-16 lg:gap-96 lg:order-1 ${
            choicesRevealed ? "" : "opacity-0 transition opacity duration-300"
          }`}
        >
          <button
            className={`game__option w-36 h-36 p-4 lg:p-9 lg:h-72 lg:w-72  ${
              choices[0]?.name === "paper"
                ? "game__option--paper"
                : choices[0]?.name === "rock"
                ? "game__option--rock"
                : "game__option--scissors"
            }`}
            id="game__option-1"
          >
            <div className="option__content p-7 lg:p-12">
              <img
                src={choices[0]?.image}
                alt={choices[0]?.name}
                className="w-24 h-14 lg:h-28 lg:w-32"
              />
            </div>
          </button>
          <div
            className={`game__option w-36 h-36 p-4 lg:p-9 lg:h-72 lg:w-72 ${
              choices[1]?.name === "paper"
                ? "game__option--paper"
                : choices[1]?.name === "rock"
                ? "game__option--rock"
                : "game__option--scissors"
            }`}
          >
            <div className="option__content p-7 lg:p-12">
              <img
                src={choices[1]?.image}
                alt={choices[1]?.name}
                className="w-24 h-14 lg:h-28 lg:w-32"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex justify-around gap-14 lg:w-[100%] lg:gap-64 mt-4 lg:mt-4 lg:mb-12 text-white text-lg lg:text-2xl`}
        >
          <div>YOU PICKED</div>
          <div>THE HOUSE PICKED</div>
        </div>
      </div>
      <div className="mt-16 lg:mt-36 mb-8 w-60 lg:absolute">
        <h1 className="text-6xl text-nowrap text-white font-bold text-center">
          YOU {result === 1 ? "WIN" : result === -1 ? "LOSE" : "DRAW"}
        </h1>
        <button
          className="bg-white mt-4 p-3 w-32 w-full border rounded-lg hover:text-red-500"
          onClick={() => {
            handlePlayGame("");
          }}
        >
          PLAY AGAIN
        </button>
      </div>
    </>
  );
};

export default Play;
