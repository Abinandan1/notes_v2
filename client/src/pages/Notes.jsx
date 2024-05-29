import { customFetch } from "../utils/customFetch";
import Wrapper from "../wrappers/Notes";
import { NoData, NotesLayout, SearchAndFilterContainer } from "../components";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  try {
    const response = await customFetch("/notes");
    return response.data;
  } catch (error) {
    return error;
  }
};

const Notes = () => {
  const { notes } = useLoaderData();
  const [view, setView] = useState("grid");
  const [options, setOptions] = useState(false);
  if (notes.length === 0)
    return (
      <Wrapper>
        <div className="section-center">
          <NoData text="You'll see notes you create here." />
        </div>
      </Wrapper>
    );
  return (
    <Wrapper>
      <div className="section-center">
        <SearchAndFilterContainer
          view={view}
          setOptions={setOptions}
          setView={setView}
        />
        <NotesLayout options={options} setOptions={setOptions} view={view} />
      </div>
    </Wrapper>
  );
};

export default Notes;
