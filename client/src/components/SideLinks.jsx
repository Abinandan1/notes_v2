import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiSolidArchiveIn, BiSolidUserRectangle } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import SideLink from "./SideLink";

const SideLinks = () => {
  return (
    <div className="side-links">
      {/* <NavLink to="" className="side-link" end>
        <span className="icon"></span>
        dashboard
      </NavLink> */}
      <SideLink to="" icon={<FaHome />} text="dashboard" />
      <SideLink to="addNote" icon={<AiOutlineAppstoreAdd />} text="add note" />
      <SideLink to="notes" icon={<GiNotebook />} text="notes" />
      <SideLink to="archive" icon={<BiSolidArchiveIn />} text="archive" />
      <SideLink to="bin" icon={<BsTrash3 />} text="bin" />
      <SideLink to="profile" icon={<BiSolidUserRectangle />} text="profile" />
    </div>
  );
};
export default SideLinks;
