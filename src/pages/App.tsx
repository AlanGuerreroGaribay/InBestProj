import {
  SideBarContainer,
  SideBarButtonArea,
} from "@/components/SideBar/SideBar";
import { LayOut, LayOutBody, LayOutHeader } from "@/components/Layout/LayOut";
import { useState } from "react";
import Button from "@/components/Buttons/Button";
import Input from "@/components/Inputs/Input";
import MainPageView from "@/views/MainPageView";
import ModalShowAllLaunches from "@/views/ModalShowAllLaunches";
import { useFetchLaunches } from "@/hooks/useFetchLaunches";

function App() {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const [latitude, setLatitude] = useState<number>(9.0477206);
  const [longitude, setLongitude] = useState<number>(167.7431292);
  const [launchId, setLaunchId] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [launchesNumber, setLaunchesNumber] = useState<number>(9);

  const launches = useFetchLaunches(launchesNumber);

  const closeModal = () => {
    setModal(false);
    setLaunchId("");
  };

  return (
    <>
      <ModalShowAllLaunches
        modal={modal}
        launchId={launchId}
        lon={longitude}
        lat={latitude}
        close={closeModal}
      />
      <LayOut>
        <LayOutHeader
          show={!showSideBar}
          handler={() => setShowSideBar(!showSideBar)}
        />
        <LayOutBody show={showSideBar}>
          <SideBarContainer show={showSideBar}>
            <SideBarButtonArea>
              <Button text="Lanzamientos" />
              <Input placeHolder="Ingresa el año que quieras filtrar" />
            </SideBarButtonArea>
          </SideBarContainer>
          <MainPageView launches={launches} />
        </LayOutBody>
      </LayOut>
    </>
  );
}

export default App;
