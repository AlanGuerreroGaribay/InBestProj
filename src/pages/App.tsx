import {
  SideBarContainer,
  SideBarButtonArea,
} from "@/components/SideBar/SideBar";
import { LayOut, LayOutBody, LayOutHeader } from "@/components/Layout/LayOut";
import { useState } from "react";
import Button from "@/components/Buttons/Button";
import Input from "@/components/Inputs/Input";
import MainPageView from "@/views/MainPageView";

function App() {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  // const [modal, setModal] = useState<string>("");

  // const closeModal = () => {
  //   setModal("hide");
  // };

  //handler para mostrar mas
  // const loadMoreLaunches = () => {
  //   setLaunchesNumber(launchesNumber + 9);
  // };

  return (
    <>
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
          <MainPageView />
        </LayOutBody>
      </LayOut>
    </>
  );
}

export default App;
