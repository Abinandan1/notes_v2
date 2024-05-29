import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  .form-label {
    font-size: clamp(0.75rem, 2vw, 1rem);
    padding: 0.5rem;
    white-space: nowrap;
    font-weight: bold;
  }
  @media screen and (max-width: 500px) {
    .form-label {
      white-space: normal;
    }
  }
`;

export default Wrapper;
