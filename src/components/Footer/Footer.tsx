import { useState } from "react";
import "./style.css";
import Rules from "../Rules/Rules";
const Footer = () => {
  const [dialog, openDialog] = useState(false);

  const handleClickDialog = () => {
    openDialog(!dialog);
  };

  return (
    <footer className="w-full p-8 text-center  absolute bottom-9">
      <div className="w-full lg:text-right">
        <button
          className="footer__content px-6  py-2 w-32  border rounded-lg text-white text-center"
          onClick={() => handleClickDialog()}
        >
          RULES
        </button>
      </div>

      <Rules dialog={dialog} handleClickDialog={handleClickDialog} />
      {/*
        <div className="attribution mt-8 text-zinc-500  ">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-slate-400"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/diahabib/" className="text-slate-400">
          @diahabib
        </a>
        .
      </div>
      */}
    </footer>
  );
};

export default Footer;
