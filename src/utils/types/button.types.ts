import React from "react";

export type ButtonProps = {
  img?: string;
  text?: string;
  handler?: React.MouseEventHandler<HTMLButtonElement>;
};
