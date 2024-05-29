import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import Wrapper from "../wrappers/Landing";
import { IoMdTime } from "react-icons/io";
import { FilterBtns, NotesGridList } from "../components";
import { toast } from "react-toastify";
import { useState } from "react";
export const loader = async () => {
  try {
    const response = await customFetch(
      "/notes?deleted=false&archived=false&sort=-updatedAt"
    );
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Landing = () => {
  const { notes } = useLoaderData();
  const [view, setView] = useState("grid");
  const [options, setOptions] = useState();
  return (
    <Wrapper>
      <div className="section-center">
        <header>
          <h4>
            <IoMdTime />
            recent
          </h4>
          <FilterBtns view={view} setView={setView} />
        </header>
        <NotesGridList
          options={options}
          setOptions={setOptions}
          view={view}
          notes={notes}
        />
      </div>
    </Wrapper>
  );
};
export default Landing;
