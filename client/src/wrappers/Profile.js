import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  height: calc(100vh - 8rem);
  justify-content: center;
  align-content: center;
  h3 {
    margin-bottom: 2rem;
  }
  .btn {
    margin-top: 1rem;
  }
  .checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .checkbox .form-input {
  }
  .form-label {
    margin: 0;
  }
`;

export default Wrapper;
