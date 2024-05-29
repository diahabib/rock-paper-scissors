import icon_close from "../../assets/icon-close.svg";
import image_rules from "../../assets/image-rules.svg";
const Rules = ({
  dialog,
  handleClickDialog,
}: {
  dialog: boolean;
  handleClickDialog: () => void;
}) => {
  return (
    <div className={`blurer ${dialog ? "block" : "hidden"} `}>
      <span
        className={`dialog-window ${
          dialog ? "flex lg:flex-row lg:flex-wrap" : "hidden"
        } text-center pt-24 lg:p-8 items-center lg:items-baseline lg:justify-between`}
      >
        <span className="dialog-title text-4xl font-bold">RULES</span>
        <span className="dialog__image mt-36 lg:mt-0 lg:translate-x-14  lg:order-last">
          <img src={image_rules} alt="" />
        </span>
        <button className="dialog__btn text-center lg:relative lg:order-1 ">
          <img
            src={icon_close}
            alt=""
            onClick={handleClickDialog}
            className="w-6"
          />
        </button>
      </span>
    </div>
  );
};

export default Rules;
