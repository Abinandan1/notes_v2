import {
  Outlet,
  redirect,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../wrappers/DashboardLayout";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const response = await customFetch("/users/current-user");
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/login");
  }
};

const DashboardContext = createContext();
// const getThemeFromLocalStorage = () => {
//   const theme = JSON.parse(localStorage.getItem("theme")) || false;
//   return theme;
// };
const DashboardLayout = ({ isDarkTheme }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [profile, setProfile] = useState(false);
  const [theme, setTheme] = useState(isDarkTheme);
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const paths = useLocation().pathname.split("/");
  const pathLength = paths[paths.length - 1].length;
  const logoutUser = async () => {
    const response = await customFetch.delete("/auth/logout");
    toast.success(response.data.msg || "log out successful");
    navigate("/login");
    // toast.error(error?.response?.data?.msg);
  };
  const toggleTheme = () => {
    setTheme(!theme);
    document.body.classList.toggle("dark-theme", !theme);
    localStorage.setItem("theme", !theme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme);
  }, []);
  return (
    <DashboardContext.Provider
      value={{
        theme,
        toggleTheme,
        showSidebar,
        setShowSidebar,
        user,
        logoutUser,
        profile,
        setProfile,
      }}
    >
      <Wrapper pathLength={pathLength}>
        <div className="dashboard">
          <BigSidebar />
          <SmallSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </div>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
