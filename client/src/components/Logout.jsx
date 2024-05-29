import { useDashboardContext } from "../pages/DashboardLayout";

const Logout = () => {
  const { user, logoutUser, profile, setProfile } = useDashboardContext();
  return (
    <>
      <div onClick={() => setProfile(!profile)} className="profile">
        {!user.image ? user.name[0].toUpperCase() : <img src={user.image} />}
      </div>
      <button
        onClick={logoutUser}
        className={` btn logout ${profile && "show-logout"}`}
      >
        logout
      </button>
    </>
  );
};
export default Logout;
