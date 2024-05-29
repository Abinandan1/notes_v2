import styled from "styled-components";
const Wrapper = styled.div`
  header {
    background: var(--bg-secondary-color);
    box-shadow: var(--shadow-1);
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    align-items: center;
    width: clamp(70%, 5vw, 90%);
    margin: 0 auto;
    gap: 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
  }
  h4 {
    display: flex;
    gap: 0.25rem;
  }
`;
export default Wrapper;
