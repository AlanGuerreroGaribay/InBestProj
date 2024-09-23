import {
  SideBarContainer,
  SideBarButtonArea,
} from "@/components/SideBar/SideBar";
import { LayOut, LayOutBody, LayOutHeader } from "@/components/Layout/LayOut";
import { useState } from "react";
import Button from "@/components/Buttons/Button";
import MainPageView from "@/views/MainPageView";
import ModalShowAllLaunches from "@/views/ModalShowAllLaunches";
import { useFetchLaunches } from "@/hooks/useFetchLaunches";
import { LaunchDataType } from "@/utils/types/launchData.types";

function App() {
  const [data, setData] = useState<LaunchDataType[]>([]);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [launchId, setLaunchId] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [launchesNumber, setLaunchesNumber] = useState<number>(9);

  const launches = useFetchLaunches(launchesNumber);

  const closeModal = () => {
    setModal(false);
    setLaunchId("");
  };

  const seeMoreHandler = () => {
    setLaunchesNumber(launchesNumber + 9);
  };

  const launchHandler = (id: string) => {
    setLaunchId(id);
    const launchData = launches.filter((launch) => launch.id === id);
    setData(launchData);
    setModal(true);
  };

  return (
    <>
      <ModalShowAllLaunches
        modal={modal}
        modalData={data}
        launchId={launchId}
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
            </SideBarButtonArea>
          </SideBarContainer>
          <MainPageView
            seeMore={seeMoreHandler}
            launches={launches}
            handler={launchHandler}
          />
        </LayOutBody>
      </LayOut>
    </>
  );
}

export default App;
