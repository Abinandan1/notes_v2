import Wrapper from "../wrappers/FilterBtns";
import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";
const FilterBtns = ({ view, setView }) => {
  return (
    <Wrapper>
      <div className="filter-btns">
        <button
          type="button"
          onClick={() => setView("grid")}
          className={`filter-btn ${view === "grid" && "view"}`}
        >
          <TbLayoutGrid />
        </button>
        <button
          type="button"
          onClick={() => setView("list")}
          className={`filter-btn ${view === "list" && "view"}`}
        >
          <TbLayoutList />
        </button>
      </div>
    </Wrapper>
  );
};
export default FilterBtns;
