import { ButtonProps } from "@/utils/types/button.types";

const ButtonRounded = ({ img, handler }: ButtonProps) => {
  return (
    <button onClick={handler} className="button_rounded">
      <img src={img} alt="" />
    </button>
  );
};

export default ButtonRounded;
