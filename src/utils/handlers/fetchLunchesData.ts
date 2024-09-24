import axios from "axios";
import {
  GetDataLaunchesProps,
  LaunchDataType,
} from "../types/launchData.types";

export const fetchLaunchesData = async ({ data }: GetDataLaunchesProps) => {
  const fetchedData = await axios.post(
    `https://api.spacexdata.com/v5/launches/query`,
    data
  );

  const filteredData = await fetchedData.data.docs.map(
    (launch: LaunchDataType) => ({
      id: launch.id,
      name: launch.name,
      rocket: launch.rocket,
      success: launch.success ? "Mision exitosa" : "Mision fallida",
      date_local: launch.date_local,
      launchpad: launch.launchpad,
    })
  );

  return filteredData;
};
