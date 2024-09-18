import "@/scss/components/_card.scss";
import { CompProps } from "@/utils/types/layout.types";

export const CardsContainer = ({ children }: CompProps) => {
  return <div className="cards-container">{children}</div>;
};

export const CardItem = ({
  name,
  rocket,
  success,
  date,
  handler,
}: {
  name: string;
  rocket: string;
  success: boolean;
  date: string;
  handler?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className="card" onClick={handler}>
      <h3>{name}</h3>
      <span>Cohete: {rocket}</span>
      <span>{success ? "Misión exitosa" : "Misión fallida"}</span>
      <span>Fecha de lanzamineto: {date}</span>
    </div>
  );
};
