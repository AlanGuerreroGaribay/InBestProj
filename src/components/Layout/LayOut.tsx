import { CompProps, CompPropsMouseHandler } from "@/utils/types/layout.types";
import Button from "../Buttons/Button";
import "@/scss/_main.scss";

export const LayOut = ({ children }: CompProps) => {
  return <div className={"layout_page"}>{children}</div>;
};

export const LayOutHeader = ({ handler }: CompPropsMouseHandler) => {
  return (
    <div className="layout__header_container">
      <Button text="button" handler={handler} />
    </div>
  );
};

export const LayOutBody = ({ children }: CompProps) => {
  return <div className="layout__body_container">{children}</div>;
};
