import { useEffect, useState } from "react";
import {
  GetDataLaunchesProps,
  LaunchDataType,
} from "@/utils/types/launchData.types";
import { fetchLaunchesData } from "@/utils/handlers/fetchLunchesData";

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

  const launches = async (data: GetDataLaunchesProps) => {
    const filteredData = await fetchLaunchesData(data);

    localStorage.setItem("myLauchesData", JSON.stringify(filteredData));

    setLaunchesData(filteredData);
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
