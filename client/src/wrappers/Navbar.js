import styled from "styled-components";
const Wrapper = styled.nav`
  background: var(--bg-secondary-color);
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(var(--box-shadow-color), 0.1);
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--fluid-width);
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    font-size: 2rem;
    cursor: pointer;
    display: grid;
    align-items: center;
  }
  .theme-profile {
    position: relative;
    display: grid;
    grid-template-columns: auto 5rem;
    gap: 1rem;
    align-items: center;
    justify-items: center;
  }
  .theme-btn {
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    font-size: 1.25rem;
    display: grid;
    align-items: center;
    transition: background-color 0.3s ease-in-out;
    border-radius: 50%;
    padding: 0.25rem;
    color: var(--text-secondary-color);
  }
  .theme-btn:hover {
    background: var(--bg-color);
  }
  .profile {
    font-family: var(--headingFont);
    width: 3rem;
    height: 3rem;
    background: var(--primary-500);
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-size: 1.25rem;
  }
  .profile img {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .logout {
    display: none;
    position: absolute;
    top: 4rem;
    left: 3rem;
    padding: 0.2rem 0.5rem;
    text-transform: capitalize;
  }
  .show-logout {
    display: grid;
  }
  @media screen and (min-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 2;
    .nav-center {
      width: 90%;
    }
  }
`;
export default Wrapper;
