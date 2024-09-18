import { CompProps } from "@/utils/types/layout.types";
import "@/scss/_main.scss";

export const SideBarContainer = ({ children, show }: CompProps) => {
  return (
    <div className={`sidebar-container ${show ? "show" : "hide"}`}>
      {children}
    </div>
  );
};

export const SideBarButtonArea = ({ children }: CompProps) => {
  return <div className="button-area">{children}</div>;
};
