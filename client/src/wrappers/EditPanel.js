import styled from "styled-components";
const Wrapper = styled.div`
  background: var(--bg-secondary-color);
  box-shadow: var(--shadow-2);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 300px;
  margin: 0 auto;
  position: relative;
  .color-container {
    position: absolute;
    top: 125%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-secondary-color);
    border-radius: 0.5rem;
    display: none;
    gap: 0.5rem;
    padding: 1rem;
    box-shadow: var(--shadow-2);
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 2rem);
  }
  .show-color-container {
    display: grid;
  }
  .color {
    cursor: pointer;
    justify-self: center;
    border-radius: 50%;
    height: 1.75rem;
    width: 1.75rem;
    border: 1px solid var(--text-color);
  }
  .selected {
    height: 2rem;
    width: 2rem;
  }
  .color-container .selected {
    border: 3px dashed var(--gray-400);
  }
  .transform-btns {
    display: flex;
    gap: 0.5rem;
  }
  .textTransform {
    cursor: pointer;
    padding: 0.25rem 0;
    width: 1.5rem;
    text-transform: capitalize;
    font-size: 1rem;
    background: transparent;
    border: none;
    border: 1px solid var(--text-color);
    color: var(--text-color);
    border-radius: var(--border-radius);
  }
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .underline {
    text-decoration: underline;
  }
  /* .transformed {
    background: var(--text-color);
    color: var(--bg-secondary-color);
  } */
`;
export default Wrapper;
