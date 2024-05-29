import styled from "styled-components";
const Wrapper = styled.div`
  .edit-btn {
    color: var(--text-color);
    cursor: pointer;
    background: transparent;
    text-transform: capitalize;
    display: flex;
    gap: 0.25rem;
    border: transparent;
    padding: 0.5rem;
    font-family: var(--headingFont);
    width: 100%;
    height: 100%;
  }
  .edit-btn:hover {
    background: var(--bg-secondary-color);
  }
`;
export default Wrapper;
