import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { id } = params;
  try {
    const response = await customFetch.patch(`/notes/${id}`, data);
    const msg = "note " + data?.msg;
    toast.success(msg);
    if (data?.msg === "archived") return redirect("/dashboard/archive");
    if (data?.msg === "deleted") return redirect("/dashboard/bin");
  } catch (error) {
    toast(error?.response?.data?.msg);
  }
  return redirect("/dashboard/notes");
};

const UpdateNote = () => {
  return <div></div>;
};
export default UpdateNote;
