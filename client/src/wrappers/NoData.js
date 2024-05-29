import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 2rem;
  margin-top: 5rem;

  .img-container {
    height: 20rem;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Wrapper;
