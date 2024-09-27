import { LayOut, LayOutBody, LayOutHeader } from "@/components/Layout/LayOut";
import { useState } from "react";
import { useFetchLaunches } from "@/hooks/useFetchLaunches";
import { useNavigate } from "react-router-dom";
import MainPageView from "@/views/MainPageView";
import SideBarView from "@/views/SideBarView";

function App() {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [launchesNumber, setLaunchesNumber] = useState<number>(18);
  //establece los tipos de filtros
  const [filters, setFilters] = useState({
    name: "",
    year: "",
    success: "",
    rocket: "",
  });

  const launches = useFetchLaunches(launchesNumber);
  const navigate = useNavigate();

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

  // genera obtiene mas resultados de lanzamientos
  const seeMoreHandler = () => {
    setLaunchesNumber((prev) => prev + 18);
    setFilters({ name: "", year: "", rocket: "", success: "" });
  };

  // abre un modal y le pasa los datos de un lanzamiento en especifico segun el id de este
  const launchHandler = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <LayOut>
        <LayOutHeader
          searchValue={filters.name}
          search={(e) => setFilters({ ...filters, name: e.target.value })}
          show={!showSideBar}
          handler={() => setShowSideBar(!showSideBar)}
        />
        <LayOutBody show={showSideBar}>
          <SideBarView
            showSideBar={showSideBar}
            setFilters={setFilters}
            filters={filters}
          />
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
