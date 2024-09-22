import { useEffect, useState } from "react";
import {
  GetDataLaunchesProps,
  LaunchDataType,
} from "@/utils/types/launchData.types";
import { fetchLaunchesData } from "@/utils/handlers/fetchLunchesData";
import { fetchLaunchPadCoordenatesHandler } from "@/utils/handlers/fetchLaunchPadData";

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

  //traigo la data de todos los lanzamientos
  const launches = async (data: GetDataLaunchesProps) => {
    const filteredDataLaunches = await fetchLaunchesData(data);

    const filteredDataLaunchPads = await Promise.all(
      launchesData.map((launch) => {
        return fetchLaunchPadCoordenatesHandler(launch.launchpad);
      })
    );

    console.log(filteredDataLaunchPads);

    localStorage.setItem("myLauchesData", JSON.stringify(filteredDataLaunches));

    setLaunchesData(filteredDataLaunches);
  };

  useEffect(() => {
    const storedLaunches = localStorage.getItem("myLauchesData");

    if (storedLaunches) {
      launches(params);
    } else {
      setLaunchesData(JSON.parse(storedLaunches ?? ""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launchesData.length, params.data.options.limit]);

  return launchesData;
};
