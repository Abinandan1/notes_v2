import { BsThreeDotsVertical } from "react-icons/bs";
import Wrapper from "../wrappers/Note";
import { FaTrash, FaTrashRestore } from "react-icons/fa";
import { MdArchive, MdUnarchive } from "react-icons/md";
import { PiPushPinSimpleFill, PiPushPinSimpleSlashFill } from "react-icons/pi";
import EditBtn from "./EditBtn";
import { useLocation, useNavigate } from "react-router-dom";

const Note = ({
  title,
  description,
  id,
  color,
  font,
  submitForm,
  pinned,
  archived,
  view,
  options,
  setOptions,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  const navigateTo = currentPath === "dashboard" ? `notes/${id}` : `${id}`;
  return (
    <Wrapper view={view}>
      <div
        onClick={(e) => currentPath !== "bin" && navigate(navigateTo)}
        style={{ background: color, fontFamily: font }}
        className="info"
      >
        <p className="title" ref={title}></p>
        <p className="description" ref={description}></p>
      </div>
      <button
        className="options-btn"
        onClick={() => {
          const value = options === id ? "" : id;
          setOptions(value);
        }}
      >
        <BsThreeDotsVertical />
      </button>
      {options === id && (
        <div className="options">
          {currentPath === "bin" ? (
            <EditBtn
              icon={<FaTrashRestore />}
              id="restore"
              view={view}
              submitForm={submitForm}
            />
          ) : (
            <>
              <EditBtn
                id="delete"
                icon={<FaTrash />}
                view={view}
                submitForm={submitForm}
              />
              {archived ? (
                <EditBtn
                  id="unarchive"
                  icon={<MdUnarchive />}
                  view={view}
                  submitForm={submitForm}
                />
              ) : (
                <EditBtn
                  id="archive"
                  icon={<MdArchive />}
                  view={view}
                  submitForm={submitForm}
                />
              )}

              {pinned ? (
                <EditBtn
                  id="unpin"
                  icon={<PiPushPinSimpleSlashFill />}
                  view={view}
                  submitForm={submitForm}
                />
              ) : (
                <EditBtn
                  id="pin"
                  icon={<PiPushPinSimpleFill />}
                  view={view}
                  submitForm={submitForm}
                />
              )}
            </>
          )}
        </div>
      )}
    </Wrapper>
  );
};
export default Note;
