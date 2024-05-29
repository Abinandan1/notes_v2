import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import Wrapper from "../wrappers/Archive";
import { useState } from "react";
import { NoData, NotesGridList, SearchAndFilterContainer } from "../components";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  try {
    const response = await customFetch("/notes?archived=true&deleted=false");
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Archive = () => {
  const { notes } = useLoaderData();
  const [view, setView] = useState("grid");
  const [options, setOptions] = useState();
  if (notes.length === 0)
    return (
      <Wrapper>
        <div className="section-center">
          <NoData text="You'll see notes you archive here." />
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
        <div className="archived">
          <h4>archived</h4>
          <NotesGridList
            options={options}
            setOptions={setOptions}
            view={view}
            notes={notes}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Archive;
