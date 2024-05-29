import Wrapper from "../wrappers/SearchAndFilterContainer";
import FilterBtns from "./FilterBtns";
const SearchAndFilterContainer = ({ view, setView }) => {
  return (
    <Wrapper>
      <input type="search" className="form-input" placeholder="search" />
      <FilterBtns view={view} setView={setView} />
    </Wrapper>
  );
};
export default SearchAndFilterContainer;
