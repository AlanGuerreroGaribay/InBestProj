import axios from "axios";

export const fetchLaunchPadCoordenatesHandler = async (launchpadId: string) => {
  const coordantesData = await axios.get(
    `https://api.spacexdata.com/v4/launchpads/${launchpadId}`
  );

  const coordantes = {
    longitude: coordantesData.data.longitude,
    latitude: coordantesData.data.latitude,
  };

  return coordantes;
};
