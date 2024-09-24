import { CompProps, CompPropsMouseHandler } from "@/utils/types/layout.types";

import Input from "../Inputs/Input";
import "@/scss/_main.scss";
import ButtonRounded from "../Buttons/ButtonRounded";

export const LayOut = ({ children }: CompProps) => {
  return <div className="layout_page">{children}</div>;
};

export const LayOutHeader = ({ searchValue, handler, search }: CompPropsMouseHandler) => {
  return (
    <div className="layout_header">
      <ButtonRounded handler={handler} />
      <Input value={searchValue} placeHolder="Search" onchange={search} />
    </div>
  );
};

export const LayOutBody = ({ children, show }: CompProps) => {
  return <div className={`layout_body ${show ? "show" : ""}`}>{children}</div>;
};
