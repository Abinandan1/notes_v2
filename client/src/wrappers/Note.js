import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  .info {
    cursor: pointer;
    background: var(--bg-secondary-color);
    padding: 1rem;
    width: ${(props) =>
      props.view === "grid" ? "10rem" : "clamp(20rem,40vw,50rem)"};
    height: ${(props) => (props.view === "grid" ? "8rem" : "auto")};
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius);
    transition: var(--transition);
  }
  .info:hover {
    box-shadow: var(--shadow-3);
    transform: scale(1.03);
  }
  p {
    margin: 0;
    text-align: left;
  }
  .title {
    margin-bottom: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .options-btn {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 5px;
    display: grid;
    place-items: center;
    background: transparent;
    font-size: 1rem;
    border: transparent;
    color: var(--text-color);
  }
  .options {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background: var(--bg-color);
    display: ${(props) => (props.view === "grid" ? "grid" : "flex")};
    gap: 0.25rem;
    box-shadow: var(--shadow-1);
    z-index: 2;
  }
`;
export default Wrapper;
