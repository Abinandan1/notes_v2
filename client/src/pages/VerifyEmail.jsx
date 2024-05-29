import { Link, useLoaderData } from "react-router-dom";
import { Wrapper } from "../wrappers/VerifyEmail";
import { customFetch } from "../utils/customFetch";
import { Logo } from "../components";

export const loader = async ({ request }) => {
  const [verificationToken, email] = [
    ...new URLSearchParams(request.url).values(),
  ];
  try {
    const response = await customFetch.post("/auth/verify-email", {
      verificationToken,
      email,
    });
    return response.data.msg;
  } catch (error) {
    return error?.response?.data?.msg;
  }
};
export const action = async ({ request }) => {
  return null;
};

const VerifyEmail = () => {
  const msg = useLoaderData();
  const isVerified = msg === "email verified";

  return (
    <Wrapper>
      <header>
        <Logo />
      </header>
      <div className="container">
        <h4>{msg}</h4>
        <Link to="/login" className="btn">
          login
        </Link>
      </div>
    </Wrapper>
  );
};
export default VerifyEmail;
