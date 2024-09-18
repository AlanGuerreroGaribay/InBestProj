import { CardItem, CardsContainer } from "@/components/Card/Card";
import { Modal, ModalFooter } from "@/components/Modal/Modal";
import { fetchLaunchPadCoordenatesHandler } from "@/utils/handlers/fetchLaunchPadData";
import { LaunchDataType } from "@/utils/types/launchData.types";

const ModalShowAllLaunches = ({
  modal,
  launches,
  loadMoreLaunches,
  addressLaunchHandler,
  close,
}: any) => {
    
  const getCoordenates = (lon: number, lat: number) => {
    return addressLaunchHandler(lon, lat);
  };
  const handleAddress = async (launchPadId: string) => {
    const address = await fetchLaunchPadCoordenatesHandler(launchPadId);
    await getCoordenates(address.longitude, address.latitude);
    console.log(address);
    return;
  };

  const closeModalHandler = () => {
    close();
  };

  return (
    <Modal modal={modal}>
      <CardsContainer>
        {launches?.map((launch: LaunchDataType, i: number) => {
          return (
            <CardItem
              key={`card-launches-${i}`}
              name={launch.name}
              rocket={launch.rocket}
              success={launch.success}
              date={launch.date_local}
              handler={() => handleAddress(launch.launchpad)}
            />
          );
        })}
      </CardsContainer>
      <ModalFooter
        handler={loadMoreLaunches}
        close={() => closeModalHandler()}
      />
    </Modal>
  );
};

export default ModalShowAllLaunches;
