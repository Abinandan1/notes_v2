import { FormRow, SubmitBtn, Title } from "../components";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import Wrapper from "../wrappers/LoginAndRegister";
import { Logo } from "../components";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import AlertMessage from "../components/AlertMessage";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/register", data);
    const { msg } = response.data;
    toast.success("registered successfully");
    return { msg, status: 201 };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Register = () => {
  const actionData = useActionData();
  return (
    <Wrapper>
      <Form className="form" method="post">
        <Link to="/">
          <Logo />
        </Link>
        {actionData?.status === 201 ? (
          <AlertMessage msg={actionData?.msg} />
        ) : (
          <>
            <Title value="register" />
            <FormRow name="name" type="text" />
            <FormRow name="email" />
            <FormRow name="password" />
            <SubmitBtn value="submit" />
            <p>
              Already have an account?{" "}
              <Link to="/login" className="link-btn">
                Login
              </Link>
            </p>
          </>
        )}
      </Form>
    </Wrapper>
  );
};
export default Register;
