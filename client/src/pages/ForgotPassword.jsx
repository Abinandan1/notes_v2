import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import { FormRow, Logo, SubmitBtn } from "../components";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import AlertMessage from "../components/AlertMessage";
import { Wrapper } from "../wrappers/VerifyEmail.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { email } = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/forgot-password", { email });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};
const ForgotPassword = () => {
  const actionData = useActionData();
  return (
    <Wrapper>
      <header>
        <Link to="/login">
          <Logo />
        </Link>
      </header>
      <Form method="post" className="form">
        {actionData?.status === 200 ? (
          <AlertMessage msg={actionData?.data?.msg} />
        ) : (
          <>
            <FormRow name="email" type="email" />
            <SubmitBtn value="submit" />
          </>
        )}
      </Form>
    </Wrapper>
  );
};
export default ForgotPassword;
