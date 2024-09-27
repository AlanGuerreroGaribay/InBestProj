import {
  FilterBy,
  SideBarContainer,
  SideBarFilterArea,
} from "@/components/SideBar/SideBar";
import { SetStateAction } from "react";

const SideBarView = ({
  showSideBar,
  setFilters,
  filters,
}: {
  showSideBar: boolean;
  setFilters: React.Dispatch<
    SetStateAction<{
      name: string;
      year: string;
      success: string;
      rocket: string;
    }>
  >;
  filters: { name: string; year: string; success: string; rocket: string };
}) => {
  return (
    <SideBarContainer show={showSideBar}>
      <SideBarFilterArea>
        <FilterBy
          filerName="Año"
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        />
        <FilterBy
          filerName="Resultado de la misión"
          onChange={(e) => setFilters({ ...filters, success: e.target.value })}
        />
        <FilterBy
          filerName="Cohete"
          onChange={(e) => setFilters({ ...filters, rocket: e.target.value })}
        />
      </SideBarFilterArea>
    </SideBarContainer>
  );
};

export default SideBarView;
