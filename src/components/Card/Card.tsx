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
  success: string;
  date: string;
  handler?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className="card-item" onClick={handler}>
      <h3>{name}</h3>
      <span>Cohete:</span>
      <span>{rocket}</span>
      <span>{success}</span>
      <span>Fecha de lanzamineto:</span>
      <span>{date}</span>
    </div>
  );
};

export const Card = ({
  name,
  date,
  handler,
}: {
  name?: string;
  rocket?: { name: string };
  success?: boolean;
  date?: string;
  handler?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className="card" onClick={handler}>
      <h3>{name?.substring(0, 13)}</h3>
      <span>Fecha de lanzamineto:</span>
      <span>{date}</span>
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
