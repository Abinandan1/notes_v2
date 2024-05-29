import Wrapper from "../wrappers/HomeLayout";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};
export default HomeLayout;
