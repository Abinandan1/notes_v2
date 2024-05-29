import Wrapper from "../wrappers/NotesGridList";
import NoteLayout from "./NoteLayout";

const NotesGridList = ({ notes, view, options, setOptions }) => {
  return (
    <Wrapper view={view}>
      <section>
        <div className="section-center">
          {notes.map((note) => {
            return (
              <NoteLayout
                view={view}
                setOptions={setOptions}
                key={note._id}
                note={note}
                options={options}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};
export default NotesGridList;
