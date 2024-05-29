import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  .section-center {
    display: grid;
    grid-template-columns: ${(props) =>
      props.view === "grid" ? "repeat(2, 1fr)" : ""};
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
    .section-center {
      grid-template-columns: ${(props) =>
        props.view === "grid" ? "repeat(3, 1fr)" : ""};
    }
  }
`;
export default Wrapper;
