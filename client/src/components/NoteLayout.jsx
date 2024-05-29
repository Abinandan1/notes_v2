import { useEffect, useRef } from "react";
import Wrapper from "../wrappers/NoteLayout";
import { useSubmit } from "react-router-dom";
import Note from "./Note";

const NoteLayout = ({ note, view, options, setOptions }) => {
  const title = useRef();
  const description = useRef();
  // EDIT BUTTON SUBMIT
  const submit = useSubmit();
  const submitForm = (e) => {
    const formData = new FormData();
    if (e.currentTarget.id === "delete") {
      formData.append("deleted", true);
      formData.append("archived", false);
      formData.append("pinned", false);
    }
    if (e.currentTarget.id === "restore") {
      formData.append("deleted", false);
    }
    if (e.currentTarget.id === "archive") {
      formData.append("archived", true);
      formData.append("pinned", false);
    }
    if (e.currentTarget.id === "unarchive") {
      formData.append("archived", false);
    }
    if (e.currentTarget.id === "pin") {
      formData.append("pinned", true);
      formData.append("archived", false);
    }
    if (e.currentTarget.id === "unpin") {
      formData.append("pinned", false);
    }
    formData.append(
      "msg",
      e.currentTarget.id === "pin" || e.currentTarget.id === "unpin"
        ? e.currentTarget.id + "ned"
        : e.currentTarget.id + "d"
    );
    const data = Object.fromEntries(formData);
    setOptions("");
    submit(data, {
      method: "post",
      action: `/dashboard/update-note/${note._id}`,
    });
  };
  useEffect(() => {
    if (note.title) title.current.innerHTML = note.title;
    // Simplifying HTML data format to text format
    let descriptionArray = note.description?.split(/<\/?[a-z]+>/);
    descriptionArray = descriptionArray?.filter((i) => i.length !== 0);
    const displayDescription = descriptionArray?.join(" ");
    // Truncating description
    const truncatedDescription = displayDescription
      ?.slice(0, 50)
      .concat(displayDescription.length > 50 ? "..." : "");
    if (note.description) description.current.innerHTML = truncatedDescription;
  }, [note]);

  return (
    <Wrapper>
      <Note
        id={note._id}
        title={title}
        color={note.color}
        font={note.font}
        description={description}
        archived={note.archived}
        pinned={note.pinned}
        submitForm={submitForm}
        view={view}
        options={options}
        setOptions={setOptions}
      />
    </Wrapper>
  );
};
export default NoteLayout;
