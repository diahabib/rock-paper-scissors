//import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./style.css";
const Header = ({ score }: { score: number }) => {
  //const [score, setScore] = useState(12);
  /*
  const initialScore = {
    counterValue: 0,
    lastAction: null,
  };

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          counterValue: state.counterValue + 1,
          lastAction: "increment",
        };
      case "decrement":
        return {
          counterValue: state.counterValue - 1,
          lastAction: "decrement",
        };
      default:
        return state;
    }
  };

  const [score, dispatch] = useReducer(counterReducer, initialScore);
  const [counterValue, lastAction] = score;
*/

  //const handleScoreChange = (point: number) => {
  //setScore(score + point);
  // };

  return (
    <header className="p-8 px-2">
      <div className="header__content p-6 pe-4 py-4 w flex justify-between gap-20 lg:gap-96 border-4 rounded-lg text-white flex-wrap text-center">
        <img
          src={logo}
          alt=""
          className="header__logo w-24 h-16 lg:w-36 lg:h-28 self-center"
        />
        <div className="header__score p-7 py-2 lg:p-12 lg:py-3 flex flex-col gap-y-s1 border border-white bg-white rounded-md lg:rounded-lg text-black text-center">
          <p className="score__title text-sm lg:text-lg font-semibold">SCORE</p>
          <p className="score__number text-5xl lg:text-7xl font-bold">
            {score}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
