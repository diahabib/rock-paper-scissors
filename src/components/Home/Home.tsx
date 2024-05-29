import { FuncWithOneParam, RockPaperScissors } from "../../types";
const Home = ({
  rockPaperScissors,
  handlePlayGame,
}: {
  rockPaperScissors: RockPaperScissors[];
  handlePlayGame: FuncWithOneParam;
}) => {
  return (
    <>
      <div className="flex justify-between gap-16">
        {rockPaperScissors.slice(0, 2).map((choice, index) => (
          <button
            key={index}
            className={`game__option w-36 h-36 p-4 lg:p-6 lg:h-48 lg:w-48 ${
              choice.name === "paper"
                ? "game__option--paper"
                : "game__option--scissors"
            }`}
            onClick={() => handlePlayGame(choice.name)}
          >
            <div className="option__content p-7 lg:p-10">
              <img
                src={choice.image}
                alt={choice.name}
                className="w-24 h-14 lg:h-16 lg:w-28"
              />
            </div>
          </button>
        ))}
      </div>
      <button
        className="game__option game__option--rock w-36 h-36 p-4 lg:p-6 lg:h-48 lg:w-48 mt-4"
        onClick={() => handlePlayGame(rockPaperScissors[2].name)}
      >
        <div className="option__content p-7 lg:p-10">
          <img
            src={`${rockPaperScissors[2].image}`}
            onClick={() => {
              console.log(rockPaperScissors[2].image);
            }}
            alt={rockPaperScissors[2].name}
            className="w-24 h-14 lg:h-16 lg:w-28"
          />
        </div>
      </button>
    </>
  );
};

export default Home;
