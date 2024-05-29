import styled from "styled-components";
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  .form {
    width: 95%;
    max-width: 600px;
  }
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
  p {
    text-align: center;
    margin-top: 1rem;
  }
  .link-btn {
    color: var(--primary-500);
  }
`;
export default Wrapper;
