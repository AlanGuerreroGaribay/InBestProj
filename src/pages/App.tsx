import {
  SideBarContainer,
  SideBarButtonArea,
} from "@/components/SideBar/SideBar";
import { LayOut, LayOutBody, LayOutHeader } from "@/components/Layout/LayOut";
import { useState } from "react";
import { useFetchLaunches } from "@/hooks/useFetchLaunches";
import Button from "@/components/Buttons/Button";
import MapView from "@/components/MapView/MapView";
import ModalShowAllLaunches from "@/views/ModalShowAllLaunches";
import Input from "@/components/Inputs/Input";

function App() {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const [modal, setModal] = useState<string>("");
  const [launchesNumber, setLaunchesNumber] = useState<number>(9);
  const [date, setDate] = useState<string>("");
  const [latitude, setLatitude] = useState<number>(9.0477206);
  const [longitude, setLongitude] = useState<number>(167.7431292);

  const launches = useFetchLaunches(launchesNumber);

  const launchesByDate = launches.filter((launch) => {
    const specificDate = new Date(date);
    const launchDate = new Date(launch.date_local);
    return launchDate.getFullYear() === specificDate.getFullYear();
  });

  const showAllLaunchesDataHandler = () => {
    setModal("show");
  };

  const closeModal = () => {
    setModal("hide");
  };

  //handler para mostrar mas
  const loadMoreLaunches = () => {
    setLaunchesNumber(launchesNumber + 9);
  };

  const addressLaunchHandler = async (lon: number, lat: number) => {
    setLatitude(lat);
    setLongitude(lon);
    console.log("lat", lat);
    console.log("lon", lon);
  };

  return (
    <>
      <ModalShowAllLaunches
        modal={modal}
        launches={launches}
        loadMoreLaunches={loadMoreLaunches}
        addressLaunchHandler={addressLaunchHandler}
        close={closeModal}
      />
      <LayOut show={showSideBar}>
        <LayOutHeader
          show={!showSideBar}
          handler={() => setShowSideBar(!showSideBar)}
        />
        <LayOutBody>
          <SideBarContainer show={showSideBar}>
            <SideBarButtonArea>
              <Button
                text="Lanzamientos"
                handler={showAllLaunchesDataHandler}
              />
              <Input placeHolder="Ingresa el año que quieras filtrar" />
            </SideBarButtonArea>
          </SideBarContainer>
          <MapView longitude={longitude} latitude={latitude} />
        </LayOutBody>
      </LayOut>
    </>
  );
}

export default App;
