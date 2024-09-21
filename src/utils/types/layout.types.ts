import { ReactNode } from "react";
import { LaunchDataType } from "./launchData.types";

export type CompProps = {
  modal?: string;
  children?: ReactNode;
  show?: boolean;
};

export type CompPropsMouseHandler = CompProps & {
  close?: React.MouseEventHandler<HTMLButtonElement>;
  handler?: React.MouseEventHandler<HTMLButtonElement>;
};

export type CompPropsDataLaunches = CompProps & {
  launches: LaunchDataType;
};
