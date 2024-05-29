import { Form, redirect, useSubmit } from "react-router-dom";
import Wrapper from "../wrappers/Profile";
import { useDashboardContext } from "./DashboardLayout";
import { customFetch } from "../utils/customFetch";
import { useState } from "react";
import { toast } from "react-toastify";
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.patch("/users/update-user", data);
    toast.success("profile updated");
    return redirect("/dashboard/notes");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};
const Profile = () => {
  const { user } = useDashboardContext();
  const [imgSrc, setImgSrc] = useState(user.image || "");
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const submit = useSubmit();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", imgSrc);
    submit(formData, { method: "post" });
  };
  const uploadImage = async (e) => {
    setIsSubmitting(true);
    const imageFile = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      const response = await customFetch.post("/users/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Image uploaded");
      setImgSrc(response?.data?.image?.src);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Wrapper>
      <div className="form">
        <h3>Hi, {user.name}</h3>
        <h5 className="title title-surround">profile</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            className="form-input"
            name="name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="form-input"
            name="email"
          />
        </div>
        <div className="form-row">
          <label htmlFor="image" className="form-label">
            image
          </label>
          <input
            onChange={uploadImage}
            type="file"
            className="form-input"
            accept="image/*"
            name="image"
          />
        </div>
        <div className="form-row checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            className="form-input"
            onChange={(e) =>
              e.currentTarget.checked ? setImgSrc("") : setImgSrc(user.image)
            }
          />
          <label htmlFor="" className="form-label">
            remove old profile picture
          </label>
        </div>
        <button className="btn" onClick={handleSubmit} disabled={isSubmitting}>
          submit
        </button>
      </div>
    </Wrapper>
  );
};
export default Profile;
