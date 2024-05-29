import { redirect, useSubmit } from "react-router-dom";
import { EditPanel } from "../components";
import Wrapper from "../wrappers/AddNote";
import { useRef, useState } from "react";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import { colors, fonts } from "../utils/fonts-colors";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/notes", data);
    toast.success(response.data.msg);
    return redirect("../notes");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const AddNote = () => {
  const noteTitle = useRef("");
  const noteDescription = useRef("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentFont, setCurrentFont] = useState(fonts[0]);
  const submit = useSubmit();
  const transform = (type) => {
    document.execCommand(type);
  };
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("color", currentColor);
    formData.append("font", currentFont);
    const data = Object.fromEntries(formData);
    submit(data, { method: "post" });
  };

  return (
    <Wrapper>
      <div className="section-center">
        <EditPanel
          transform={transform}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          setCurrentFont={setCurrentFont}
        />
        <div className="form" style={{ background: currentColor }}>
          <div className="form-row">
            <label htmlFor="title" className="form-label">
              title
            </label>
            <div
              className="form-input"
              ref={noteTitle}
              style={{ fontFamily: currentFont }}
              contentEditable={true}
              suppressContentEditableWarning
              onInput={(e) => setTitle(noteTitle.current.innerHTML)}
            ></div>
          </div>
          <div className="form-row">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <div
              className="form-textarea"
              ref={noteDescription}
              contentEditable={true}
              suppressContentEditableWarning
              style={{ fontFamily: currentFont }}
              onInput={(e) => setDescription(noteDescription.current.innerHTML)}
            ></div>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-block"
          >
            save
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default AddNote;
