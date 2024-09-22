import { Modal, ModalFooter } from "@/components/Modal/Modal";

const ModalShowAllLaunches = ({ modal, lat, lon, close }: any) => {
  return (
    <>
      {modal && (
        <Modal modal={modal}>
          <div>{lat}</div>
          <ModalFooter close={close} />
        </Modal>
      )}
    </>
  );
};

export default ModalShowAllLaunches;
