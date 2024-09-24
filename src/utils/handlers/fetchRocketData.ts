import axios from "axios";

export const fetchRocketData = async (rocketId: string) => {
  const rocketData = await axios.get(
    `https://api.spacexdata.com/v4/rockets/${rocketId}`
  );

  const rocket = {
    name: rocketData.data.name,
    type: rocketData.data.type,
    first_flight: rocketData.data.first_flight,
    description: rocketData.data.description,
  };

  return rocket;
};
