import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";

const SideLink = ({ to, icon, text }) => {
  const { setShowSidebar } = useDashboardContext();
  return (
    <NavLink
      onClick={() => setShowSidebar(false)}
      to={to}
      className="side-link"
      end
    >
      <span className="icon">{icon}</span>
      {text}
    </NavLink>
  );
};
export default SideLink;
