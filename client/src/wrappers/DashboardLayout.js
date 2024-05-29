import styled from "styled-components";
const Wrapper = styled.div`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: var(--fluid-width);

    ${(props) =>
      props.pathLength !== 24
        ? `max-width: var(--max-width);
    margin: 0 auto;
    padding: 1rem 0;`
        : `width: 100%;`}
  }
  @media screen and (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      ${(props) => props.pathLength !== 24 && `width: 90%;`}
    }
  }
`;
export default Wrapper;
