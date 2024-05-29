import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import Wrapper from "../wrappers/SingleNote";
import { Link, redirect, useLoaderData, useSubmit } from "react-router-dom";
import { EditBtn, EditPanel } from "../components";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { PiPushPinSimpleFill, PiPushPinSimpleSlashFill } from "react-icons/pi";
import { MdArchive, MdUnarchive } from "react-icons/md";

export const action = async ({ params, request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { id } = params;
  try {
    const response = await customFetch.patch(`/notes/${id}`, data);
    toast.success(data.msg);
    if (
      data.msg === "note deleted" ||
      data.msg === "note pinned" ||
      data.msg === "note unpinned" ||
      data.msg === "note unarchived"
    )
      return redirect("../notes");
    if (data.msg === "note archived") return redirect("../archive");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await customFetch(`/notes/${id}`);
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const SingleNote = () => {
  const { note } = useLoaderData();
  const noteTitle = useRef("");
  const noteDescription = useRef("");
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [currentColor, setCurrentColor] = useState(note.color);
  const [currentFont, setCurrentFont] = useState(note.font);
  const submit = useSubmit();
  const transform = (type) => {
    document.execCommand(type);
  };
  const handleSave = (e) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("color", currentColor);
    formData.append("font", currentFont);
    formData.append("msg", "note updated");
    const data = Object.fromEntries(formData);
    submit(data, { method: "post" });
  };
  const handleEdit = (e) => {
    const formData = new FormData();
    const id = e.currentTarget.id;
    if (id === "delete") {
      formData.append("deleted", true);
      formData.append("pinned", false);
      formData.append("archived", false);
    }
    if (id === "pin") {
      formData.append("pinned", true);
      formData.append("archived", false);
    }
    if (id === "archive") {
      formData.append("pinned", false);
      formData.append("archived", true);
    }
    if (id === "unarchive") {
      formData.append("archived", false);
    }
    if (id === "unpin") {
      formData.append("pinned", false);
    }
    formData.append("msg", `note ${id.endsWith("pin") ? id + "ne" : id}d`);
    const data = Object.fromEntries(formData);
    submit(data, { method: "post" });
  };
  useEffect(() => {
    noteTitle.current.innerHTML = title;
    noteDescription.current.innerHTML = description;
  }, []);
  return (
    <Wrapper bg={currentColor}>
      <div className="section-center">
        <Link className="back-btn" to="../notes">
          <FaArrowLeft />
        </Link>
        <EditPanel
          transform={transform}
          currentColor={currentColor}
          currentFont={currentFont}
          setCurrentColor={setCurrentColor}
          setCurrentFont={setCurrentFont}
        />
        <div className="fields">
          <div className="note-title">
            {/* <label htmlFor="title" className="">
              title
            </label> */}
            <div
              className="title-input"
              placeholder="title"
              ref={noteTitle}
              style={{ fontFamily: currentFont }}
              contentEditable={true}
              suppressContentEditableWarning
              onInput={(e) => setTitle(noteTitle.current.innerHTML)}
            ></div>
          </div>
          <div className="note-description">
            {/* <label htmlFor="description" className="">
              description
            </label> */}
            <div
              className="description-input"
              placeholder="description"
              ref={noteDescription}
              contentEditable={true}
              suppressContentEditableWarning
              style={{ fontFamily: currentFont }}
              onInput={(e) => setDescription(noteDescription.current.innerHTML)}
            ></div>
          </div>
          <button onClick={handleSave} type="submit" className="btn">
            save
          </button>
        </div>
        <div className="options">
          <EditBtn
            icon={<FaTrash />}
            id="delete"
            view="list"
            submitForm={handleEdit}
          />
          <EditBtn
            icon={note.archived ? <MdUnarchive /> : <MdArchive />}
            id={note.archived ? "unarchive" : "archive"}
            view="list"
            submitForm={handleEdit}
          />
          <EditBtn
            icon={
              note.pinned ? (
                <PiPushPinSimpleSlashFill />
              ) : (
                <PiPushPinSimpleFill />
              )
            }
            id={note.pinned ? "unpin" : "pin"}
            view="list"
            submitForm={handleEdit}
          />
        </div>
        <p className="edit-btn-name">name</p>
      </div>
    </Wrapper>
  );
};
export default SingleNote;
