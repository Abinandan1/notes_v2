import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  .container {
    display: grid;
    place-items: center;
  }
  img {
    width: 90vw;
    max-width: var(--fixed-width);
    margin-bottom: 2rem;
  }
  h4 {
    margin-bottom: 0.75rem;
    font-weight: 400;
  }
  p {
    color: var(--gray-500);
    margin-bottom: 1rem;
  }
  .link-btn {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;
export default Wrapper;
