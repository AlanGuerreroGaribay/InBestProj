import {
  FilterBy,
  SideBarContainer,
  SideBarFilterArea,
} from "@/components/SideBar/SideBar";
import { LayOut, LayOutBody, LayOutHeader } from "@/components/Layout/LayOut";
import { useState } from "react";
import MainPageView from "@/views/MainPageView";
import ModalShowAllLaunches from "@/views/ModalShowAllLaunches";
import { useFetchLaunches } from "@/hooks/useFetchLaunches";
import { LaunchDataType } from "@/utils/types/launchData.types";

function App() {
  const [data, setData] = useState<LaunchDataType[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [launchId, setLaunchId] = useState<string>("");
  const [launchesNumber, setLaunchesNumber] = useState<number>(20);
  //establece los tipos de filtros
  const [filters, setFilters] = useState({
    name: "",
    year: "",
    success: "",
    rocket: "",
  });

  const launches = useFetchLaunches(launchesNumber);

  //filtra la data segun cada tipo de filtro
  const filteredData = launches.filter((item) => {
    return (
      (filters.name === "" ||
        item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.year === "" || item.date_local.includes(filters.year)) &&
      (filters.rocket === "" ||
        item.rocket?.name
          .toLowerCase()
          .includes(filters.rocket.toLowerCase())) &&
      (filters.success === "" ||
        item.success.toLowerCase().includes(filters.success.toLowerCase()))
    );
  });

  // cierra el modal que este activo
  const closeModal = () => {
    setModal(false);
    setLaunchId("");
  };

  // genera obtiene mas resultados de lanzamientos
  const seeMoreHandler = () => {
    setLaunchesNumber(launchesNumber + 20);
    setFilters({ name: "", year: "", rocket: "", success: "" });
  };

  // abre un modal y le pasa los datos de un lanzamiento en especifico segun el id de este
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
          searchValue={filters.name}
          search={(e) => setFilters({ ...filters, name: e.target.value })}
          show={!showSideBar}
          handler={() => setShowSideBar(!showSideBar)}
        />
        <LayOutBody show={showSideBar}>
          <SideBarContainer show={showSideBar}>
            <SideBarFilterArea>
              <FilterBy
                filerName="Año"
                onChange={(e) =>
                  setFilters({ ...filters, year: e.target.value })
                }
              />
              <FilterBy
                filerName="Resultado de la misión"
                onChange={(e) =>
                  setFilters({ ...filters, success: e.target.value })
                }
              />
              <FilterBy
                filerName="Cohete"
                onChange={(e) =>
                  setFilters({ ...filters, rocket: e.target.value })
                }
              />
            </SideBarFilterArea>
          </SideBarContainer>
          <MainPageView
            launches={filteredData}
            //@ts-expect-error solo paso la funcion
            seeMore={seeMoreHandler}
            //@ts-expect-error solo paso la funcion
            handler={launchHandler}
          />
        </LayOutBody>
      </LayOut>
    </>
  );
}

export default App;
