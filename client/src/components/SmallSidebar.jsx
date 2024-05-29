import { FaTimes } from "react-icons/fa";
import Wrapper from "../wrappers/SmallSidebar";
import Logo from "./Logo";
import SideLinks from "./SideLinks";
import { useDashboardContext } from "../pages/DashboardLayout";

const SmallSidebar = () => {
  const { setShowSidebar, showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className={`side-center ${showSidebar && "show-sidebar"}`}>
        <div className="content">
          <button
            className="close-btn"
            type="button"
            onClick={() => setShowSidebar(false)}
          >
            <FaTimes />
          </button>
          <Logo />
          <SideLinks />
        </div>
      </div>{" "}
    </Wrapper>
  );
};
export default SmallSidebar;
