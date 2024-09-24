import { useEffect, useState } from "react";
import {
  GetDataLaunchesProps,
  LaunchDataType,
} from "@/utils/types/launchData.types";
import { fetchLaunchesData } from "@/utils/handlers/fetchLunchesData";
import { fetchLaunchPadCoordenatesHandler } from "@/utils/handlers/fetchLaunchPadData";
import { fetchRocketData } from "@/utils/handlers/fetchRocketData";

export const useFetchLaunches = (limit: number) => {
  const [launchesData, setLaunchesData] = useState<LaunchDataType[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params: GetDataLaunchesProps = {
    data: {
      options: {
        offset: 0,
        limit: limit,
        populate: ["payloads"],
      },
    },
  };

  //traigo la data relativa a los lanzamientos y sus plataformas de despegue
  const launches = async (data: GetDataLaunchesProps) => {
    //traigo datos de lanzamientos
    const filteredDataLaunches = await fetchLaunchesData(data);

    //traigo los datos de las plataformas para cada lanzamiento
    const filteredDataLaunchPads = await Promise.all(
      filteredDataLaunches.map((launch: LaunchDataType) => {
        return fetchLaunchPadCoordenatesHandler(launch.launchpad);
      })
    );

    //traigo los datos de los cohetes de cada misión
    const filteredDataRockets = await Promise.all(
      filteredDataLaunches.map((launch: LaunchDataType) => {
        return fetchRocketData(launch.rocket);
      })
    );

    //combino datos de plataformas y los lanzamientos
    const combinedLaunchdata = await filteredDataLaunches.map(
      (launch: LaunchDataType, i: number) => ({
        ...launch,
        coordinates: {
          latitude: filteredDataLaunchPads[i]?.latitude,
          longitude: filteredDataLaunchPads[i]?.longitude,
        },
        rocket: {
          name: filteredDataRockets[i]?.name,
          type: filteredDataRockets[i]?.type,
          first_flight: filteredDataRockets[i]?.first_flight,
          description: filteredDataRockets[i]?.description,
        },
      })
    );

    //almaceno la data en el storage
    localStorage.setItem("myLauchesData", JSON.stringify(combinedLaunchdata));

    console.log(combinedLaunchdata);
    setLaunchesData(combinedLaunchdata);
  };

  useEffect(() => {
    //uso la data del storage
    const storedLaunches = localStorage.getItem("myLauchesData");

    //valido que la data que acabo de llamar sea mayor a la del storage:
    //1) de ser asi, hago otra llamada
    //2) de lo contrario, uso la data del storage
    if (launchesData) {
      launches(params);
    } else {
      setLaunchesData(JSON.parse(storedLaunches ?? ""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launchesData.length, params.data.options.limit]);

  return launchesData;
};
