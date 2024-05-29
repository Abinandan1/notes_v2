import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import Wrapper from "../wrappers/Bin";
import { useState } from "react";
import { NoData, NotesGridList, SearchAndFilterContainer } from "../components";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  try {
    const response = await customFetch("/notes?deleted=true");
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Bin = () => {
  const { notes } = useLoaderData();
  const [view, setView] = useState("grid");
  const [options, setOptions] = useState();
  if (notes.length === 0)
    return (
      <Wrapper>
        <div className="section-center">
          <NoData text="You'll see notes you move to Bin here." />
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
        <div className="deleted">
          <h4>deleted</h4>
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
export default Bin;
