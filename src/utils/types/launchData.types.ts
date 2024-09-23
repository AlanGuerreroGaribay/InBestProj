export type GetDataLaunchesProps = {
  data: { options: { offset: number; limit: number; populate: string[] } };
};

export type LaunchDataType = {
  id: string;
  name: string;
  rocket: string;
  success: boolean;
  date_local: string;
  launchpad: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export type LaunchPadType = {
  launchpad: string;
  longitude: number;
  latitude: number;
};
