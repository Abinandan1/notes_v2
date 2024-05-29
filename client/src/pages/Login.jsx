import { SubmitBtn, Title } from "../components";
import { FormRow } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { Logo } from "../components";
import Wrapper from "../wrappers/LoginAndRegister";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/login", data);
    toast.success("log in successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <Wrapper>
      <Form className="form" method="post">
        <Link to="/">
          <Logo />
        </Link>
        <Title value="login" />
        <FormRow name="email" />
        <FormRow name="password" />
        <SubmitBtn value="submit" />
        <p>
          Not a member yet?{" "}
          <Link to="/register" className="link-btn">
            Register
          </Link>
        </p>
        <p>
          Forgot your password?{" "}
          <Link to="/user/forgot-password" className="link-btn">
            Reset Password
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
