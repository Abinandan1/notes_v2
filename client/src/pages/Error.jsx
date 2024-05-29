import Wrapper from "../wrappers/Error";
import notFoundImg from "../assets/page_not_found.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={notFoundImg} alt="Not found" />
        <h4>Oops! Page not found.</h4>
        <p>We are unable to find the page you are looking for.</p>
        <Link to="/" className="link-btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};
export default Error;
