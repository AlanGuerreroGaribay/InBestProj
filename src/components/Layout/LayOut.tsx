import { CompProps, CompPropsMouseHandler } from "@/utils/types/layout.types";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";
import "@/scss/_main.scss";

export const LayOut = ({ children }: CompProps) => {
  return <div className="layout_page">{children}</div>;
};

export const LayOutHeader = ({ handler }: CompPropsMouseHandler) => {
  return (
    <div className="layout_header">
      <div className="button">
        <Button text="" handler={handler} />
      </div>
      <Input />
    </div>
  );
};

export const LayOutBody = ({ children, show }: CompProps) => {
  return <div className={`layout_body ${show ? "show" : ""}`}>{children}</div>;
};
