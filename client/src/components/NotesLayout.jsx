import { useLoaderData } from "react-router-dom";
import Wrapper from "../wrappers/NotesLayout";
import NotesGridList from "./NotesGridList";

const NotesLayout = ({ view, options, setOptions }) => {
  let { notes } = useLoaderData();
  const pinnedNotes = notes.filter((note) => {
    return note.pinned === true;
  });
  notes = notes.filter((note) => {
    return (
      note.pinned === false && note.deleted === false && note.archived === false
    );
  });
  const isPinned = pinnedNotes.length > 0;
  return (
    <Wrapper>
      {isPinned ? (
        <div>
          <div className="pinned">
            <h4>Pinned</h4>
            <NotesGridList
              view={view}
              setOptions={setOptions}
              options={options}
              notes={pinnedNotes}
            />
          </div>
          <div className="others">
            <h4>others</h4>
            <NotesGridList
              view={view}
              setOptions={setOptions}
              options={options}
              notes={notes}
            />
          </div>
        </div>
      ) : (
        <NotesGridList
          view={view}
          setOptions={setOptions}
          options={options}
          notes={notes}
        />
      )}
    </Wrapper>
  );
};
export default NotesLayout;
