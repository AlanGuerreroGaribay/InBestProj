import { ButtonProps } from "@/utils/types/button.types";

const Button = ({ text, handler }: ButtonProps) => {
  return (
    <button className="button primary" onClick={handler}>
      {text}
    </button>
  );
};

export default Button;
