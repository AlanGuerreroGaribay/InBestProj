export type GetDataLaunchesProps = {
  data: { options: { offset: number; limit: number; populate: string[] } };
};

export type LaunchDataType = {
  name: string;
  rocket: string;
  success: boolean;
  date_local: string;
  launchpad: string;
};
