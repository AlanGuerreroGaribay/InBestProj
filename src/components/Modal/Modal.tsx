import { CompProps, CompPropsMouseHandler } from "@/utils/types/layout.types";
import "@/scss/_main.scss";
import Button from "../Buttons/Button";

export const Modal = ({ children, modal }: CompProps) => {
  return (
    <div className={`modal ${modal}`}>
      <div className="modal-content show">{children}</div>
    </div>
  );
};

export const ModalFooter = ({ close }: CompPropsMouseHandler) => {
  return (
    <div className="modal-footer">
      <Button text="Salir" handler={close} />
    </div>
  );
};
