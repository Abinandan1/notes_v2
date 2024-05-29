import styled from "styled-components";
const Wrapper = styled.div`
  .filter-btns {
    display: flex;
    gap: 0.1rem;
  }
  .filter-btn {
    cursor: pointer;
    background: transparent;
    font-size: 1.25rem;
    border: none;
    display: grid;
    place-items: center;
    color: var(--text-color);
    transition: var(--transition);
    border-radius: 50%;
    padding: 0.5rem;
  }
  .filter-btn:hover {
    box-shadow: var(--shadow-1);
    background: var(--bg-color);
  }
  .view {
    background: var(--bg-color);
  }
`;
export default Wrapper;
