import {
  Card,
  CardItem,
  CardsContainer,
  SeeMoreButton,
} from "@/components/Card/Card";
import { LaunchDataType } from "@/utils/types/launchData.types";
import { useSetScreenSize } from "@/hooks/useSetScreensize";
import "@/scss/_main.scss";
import { List, ListItem } from "@/components/List/List";

const MainPageView = ({
  launches,
  handler,
  seeMore,
}: {
  launches: LaunchDataType[];
  handler(id: string): React.MouseEventHandler<HTMLDivElement>;
  seeMore(): React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const screen = useSetScreenSize();

  const launchHandler = (id: string) => {
    handler(id);
  };

  const handlerViews = () => {
    seeMore();
  };

  const dateFormat = (dateLocal: string) => {
    const date = new Date(dateLocal);
    const formattedDate = date.toLocaleDateString("es-Es", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
  };

  return (
    <>
      {/* vista en pantalla de escritorio */}
      {screen.width > 768 && (
        <div className="main-view">
          <CardsContainer>
            {launches?.map((launch: LaunchDataType, i: number) => {
              return (
                <CardItem
                  key={`card-launches-${i}`}
                  name={launch.name}
                  rocket={launch.rocket.name}
                  success={launch.success}
                  date={dateFormat(launch.date_local)}
                  handler={() => {
                    launchHandler(launch.id);
                  }}
                />
              );
            })}
          </CardsContainer>
          <SeeMoreButton handler={handlerViews} />
        </div>
      )}

      {/* vista en telefono movil */}
      {screen.width <= 678 && (
        <>
          <List>
            {launches?.map((launch: LaunchDataType, i: number) => {
              return (
                <ListItem key={`card-launches-list-${i}`}>
                  <Card
                    key={`card-launches-card-${i}`}
                    name={launch.name}
                    date={dateFormat(launch.date_local)}
                    rocket={launch.rocket}
                    handler={() => {
                      launchHandler(launch.id);
                    }}
                  />
                </ListItem>
              );
            })}
            <SeeMoreButton handler={handlerViews} />
          </List>
        </>
      )}
    </>
  );
};

export default MainPageView;
