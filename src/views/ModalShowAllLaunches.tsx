import MapView from "@/components/MapView/MapView";
import { Modal, ModalFooter } from "@/components/Modal/Modal";

const ModalShowAllLaunches = ({ modal, modalData, close }: any) => {
  return (
    <>
      {modal && (
        <Modal modal={modal}>
          <MapView
            latitude={modalData[0].coordinates.latitude}
            longitude={modalData[0].coordinates.longitude}
          />
          <ModalFooter close={close} />
        </Modal>
      )}
    </>
  );
};

export default ModalShowAllLaunches;
