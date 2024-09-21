import {
  CardItem,
  CardsContainer,
  SeeMoreButton,
} from "@/components/Card/Card";
import { useFetchLaunches } from "@/hooks/useFetchLaunches";
import { fetchLaunchPadCoordenatesHandler } from "@/utils/handlers/fetchLaunchPadData";
import { LaunchDataType } from "@/utils/types/launchData.types";
import { useState } from "react";
import "@/scss/_main.scss";

const MainPageView = () => {
  const [latitude, setLatitude] = useState<number>(9.0477206);
  const [longitude, setLongitude] = useState<number>(167.7431292);
  const [launchesNumber, setLaunchesNumber] = useState<number>(9);

  const launches = useFetchLaunches(launchesNumber);

  console.log(launches);

  const addressLaunchHandler = async (lon: number, lat: number) => {
    setLatitude(lat);
    setLongitude(lon);
    console.log("lat", lat);
    console.log("lon", lon);
  };

  const getCoordenatesHandler = (lon: number, lat: number) => {
    return addressLaunchHandler(lon, lat);
  };

  const addressHandler = async (launchPadId: string) => {
    const address = await fetchLaunchPadCoordenatesHandler(launchPadId);
    await getCoordenatesHandler(address.longitude, address.latitude);
    console.log(address);
    return;
  };

  const loadMoreLaunches = () => {
    setLaunchesNumber(launchesNumber + 9);
  };

  return (
    <div className="main-view">
      <CardsContainer>
        {launches?.map((launch: LaunchDataType, i: number) => {
          return (
            <CardItem
              key={`card-launches-${i}`}
              name={launch.name}
              rocket={launch.rocket}
              success={launch.success}
              date={launch.date_local}
              handler={() => addressHandler(launch.launchpad)}
            />
          );
        })}
      </CardsContainer>
      <SeeMoreButton handler={loadMoreLaunches} />
    </div>
  );
};

export default MainPageView;
