import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../wrappers/BigSidebar";
import SideLinks from "./SideLinks";

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className={`sidebar ${!showSidebar && "show-sidebar"}`}>
        <div className="sidebar-center">
          <header></header>
          <SideLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
