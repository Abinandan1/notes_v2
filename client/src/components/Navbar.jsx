import { FaBarsStaggered } from "react-icons/fa6";
import Wrapper from "../wrappers/Navbar";
import Logo from "./Logo";

import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import ToggleTheme from "./ToggleTheme";
import Logout from "./Logout";

const Navbar = () => {
  const { theme, toggleTheme, showSidebar, setShowSidebar } =
    useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="toggle-btn"
        >
          <FaBarsStaggered />
        </button>
        <Logo />
        <div className="theme-profile">
          <ToggleTheme />
          <Logout />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
