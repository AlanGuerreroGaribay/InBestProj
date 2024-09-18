import { useEffect, useState } from "react";
import {
  GetDataLaunchesProps,
  LaunchDataType,
} from "@/utils/types/launchData.types";
import { fetchLaunchesData } from "@/utils/handlers/fetchLunchesData";

export const useFetchLaunches = (limit: number) => {
  const [launchesData, setDataLaunches] = useState<LaunchDataType[]>([]);

  const params: GetDataLaunchesProps = {
    data: {
      options: {
        offset: 0,
        limit: limit,
        populate: ["payloads"],
      },
    },
  };

  const launches = async (data: GetDataLaunchesProps) => {
    const filteredData = await fetchLaunchesData(data);

    localStorage.setItem("myLauchesData", JSON.stringify(filteredData));
    setDataLaunches(filteredData);

    return;
  };

  useEffect(() => {
    const storedLaunches = localStorage.getItem("myLauchesData");

    if (launchesData.length === 0) {
      setDataLaunches(JSON.parse(storedLaunches ? storedLaunches : ""));
    } else {
      launches(params);
    }
  }, [launchesData.length, params.data.options.limit]);

  return launchesData;
};
