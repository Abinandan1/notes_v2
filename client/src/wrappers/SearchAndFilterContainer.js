import styled from "styled-components";
const Wrapper = styled.div`
  background: var(--bg-secondary-color);
  box-shadow: var(--shadow-1);
  display: flex;
  justify-content: center;
  padding: 0.75rem 0;
  align-items: center;
  width: clamp(70%, 5vw, 90%);
  margin: 0 auto;
  gap: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  .form-input {
    width: clamp(70%, 10vw, 80%);
    border: none;
  }
  @media screen and (max-width: 500px) {
    .form-input {
      width: 60%;
    }
  }
`;
export default Wrapper;
