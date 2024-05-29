import {
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import { Logo } from "../components";
import { Wrapper } from "../wrappers/VerifyEmail";
import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import AlertMessage from "../components/AlertMessage";
import { useState } from "react";

export const loader = async ({ request }) => {
  const [passwordToken, email] = [...new URLSearchParams(request.url).values()];
  return { passwordToken, email };
};
export const action = async ({ request }) => {
  const formData = await request.formData();
  const {
    password,
    "confirm-password": confirmPassword,
    email,
    token,
  } = Object.fromEntries(formData);

  if (password !== confirmPassword)
    return toast.error("Passwords didn't match");
  try {
    const response = await customFetch.post("/auth/reset-password", {
      email,
      password,
      token,
    });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const ResetPassword = () => {
  const actionData = useActionData();
  const navigate = useNavigate();
  if (actionData?.status === 200)
    setTimeout(() => {
      return navigate("/login");
    }, 2000);
  const { passwordToken, email } = useLoaderData();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();
  const submit = useSubmit();
  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("token", passwordToken);
    formData.append("password", password);
    formData.append("confirm-password", cPassword);
    formData.append("email", email);
    submit(formData, { method: "post" });
  };
  return (
    <Wrapper>
      <header>
        <Logo />
      </header>
      <div className="form">
        {actionData?.status === 200 ? (
          <AlertMessage msg="Updated password. Redirecting shortly to Login Page!" />
        ) : (
          <>
            <div className="form-row">
              <label htmlFor="password" className="form-label">
                password
              </label>
              <input
                name="password"
                required
                type="password"
                className="form-input"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="confirm-password" className="form-label">
                confirm password
              </label>
              <input
                name="confirm-password"
                required
                type="password"
                className="form-input"
                onChange={(e) => setCPassword(e.currentTarget.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-block"
              onClick={handleSubmit}
            >
              reset
            </button>
          </>
        )}
      </div>
    </Wrapper>
  );
};
export default ResetPassword;
