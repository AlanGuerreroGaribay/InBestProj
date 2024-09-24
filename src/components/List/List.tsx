import { CompProps } from "@/utils/types/layout.types";

export const List = ({ children }: CompProps) => {
  return (
    <div className="list-container">
      <div className="list">{children}</div>
    </div>
  );
};

export const ListItem = ({ children }: CompProps) => {
  return <div className="list-item">{children}</div>;
};
