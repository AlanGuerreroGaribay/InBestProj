import {
  CardItem,
  CardsContainer,
  SeeMoreButton,
} from "@/components/Card/Card";
import { LaunchDataType } from "@/utils/types/launchData.types";

import "@/scss/_main.scss";

const MainPageView = ({ launches, handler, seeMore }: any) => {
  const launchHandler = (id: string) => {
    handler(id);
  };

  const handlerViews = () => {
    seeMore();
  };

  return (
    <div className="main-view">
      <CardsContainer>
        {launches?.map((launch: LaunchDataType, i: number) => {
          return (
            <CardItem
              key={`card-launches-${i}`}
              name={launch.name}
              rocket={launch.rocket}
              success={launch.success}
              date={launch.date_local}
              handler={() => {
                launchHandler(launch.id);
              }}
            />
          );
        })}
      </CardsContainer>
      <SeeMoreButton handler={handlerViews} />
    </div>
  );
};

export default MainPageView;
