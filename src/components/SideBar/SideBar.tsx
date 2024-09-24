import { CompProps } from "@/utils/types/layout.types";
import Input from "../Inputs/Input";
import "@/scss/_main.scss";

export const SideBarContainer = ({ children, show }: CompProps) => {
  return (
    <div className={`sidebar-container ${show ? "show" : "hide"}`}>
      {children}
    </div>
  );
};

export const SideBarFilterArea = ({ children }: CompProps) => {
  return <div className="button-area">{children}</div>;
};

export const FilterBy = ({
  filerName,
  onChange,
}: {
  filerName: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      Filtrar por: {filerName}
      <div>
        <Input onchange={onChange} />
      </div>
    </div>
  );
};
