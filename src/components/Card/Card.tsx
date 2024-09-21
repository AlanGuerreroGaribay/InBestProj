import "@/scss/components/_card.scss";
import { CompProps, CompPropsMouseHandler } from "@/utils/types/layout.types";
import Button from "../Buttons/Button";

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

export const SeeMoreButton = ({ handler }: CompPropsMouseHandler) => {
  return (
    <div className="card-see-more">
      <Button text="Ver más" handler={handler} />
    </div>
  );
};
