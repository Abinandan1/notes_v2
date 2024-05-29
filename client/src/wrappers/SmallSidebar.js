import styled from "styled-components";
const Wrapper = styled.aside`
  @media screen and (min-width: 992px) {
    display: none;
  }
  .side-center {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 3;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--bg-secondary-color);
    padding: 4rem 0;
    border-radius: var(--border-radius);
    width: var(--fluid-width);
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: transparent;
    color: var(--red-dark);
    font-size: 1.75rem;
    border-color: transparent;
    cursor: pointer;
  }
  .logo {
    margin-bottom: 2rem;
  }
  .side-links {
  }
  .side-link {
    padding: 1rem 0;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: var(--text-secondary-color);
    transition: var(--transition);
  }
  .side-link:hover {
    color: var(--primary-500);
  }
  .icon {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
  .active {
    color: var(--primary-500);
  }
`;
export default Wrapper;
