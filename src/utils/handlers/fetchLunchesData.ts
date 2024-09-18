import axios from "axios";
import { GetDataLaunchesProps, LaunchDataType } from "../types/launchData.types";

export const fetchLaunchesData = async ({ data }: GetDataLaunchesProps) => {
  const fetchedData = await axios.post(
    `https://api.spacexdata.com/v5/launches/query`,
    data
  );

  const filteredData = await fetchedData.data.docs.map(
    ({ name, rocket, success, date_local, launchpad }: LaunchDataType) => ({
      name,
      rocket,
      success,
      date_local,
      launchpad,
    })
  );

  return filteredData;
};
