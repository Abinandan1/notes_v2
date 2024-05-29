import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDashboardContext } from "../pages/DashboardLayout";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useDashboardContext();
  return (
    <button onClick={() => toggleTheme()} className="theme-btn">
      {theme ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  );
};
export default ToggleTheme;
