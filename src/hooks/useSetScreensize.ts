import { useEffect, useState } from "react";

type ScreenSizeProps = {
  width: number;
};

export const useSetScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSizeProps>({
    width: window.innerWidth,
  });

  const updateScreenSize = () => {
    setScreenSize({ width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };

    //eslint-disable-next-line
  }, []);

  return screenSize;
};
