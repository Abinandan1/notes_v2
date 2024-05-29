import styled from "styled-components";
const Wrapper = styled.div`
  .hero-img {
    display: none;
  }
  nav {
    display: flex;
    align-items: center;
    height: var(--nav-height);
  }
  .hero {
    min-height: calc(100vh - 6.5rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  .hero-title {
    margin-bottom: 1.5rem;
  }
  .text {
    line-height: 1.75;
    color: var(--text-secondary-color);
    margin-bottom: 2.5rem;
  }
  .btn {
    padding: 0.75rem;
  }
  .btn:first-child {
    margin-right: 1rem;
  }
  @media screen and (min-width: 992px) {
    .hero {
      grid-template-columns: 1fr 450px;
    }
    .hero-img {
      display: block;
    }
  }
`;
export default Wrapper;
