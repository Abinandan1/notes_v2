import styled from "styled-components";
const Wrapper = styled.aside`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
    box-shadow: 1px 0 0 0 rgba(var(--box-shadow-color), 0.1);
    z-index: 2;
    .sidebar {
      background: var(--bg-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .sidebar-center {
      position: sticky;
      top: 0;
    }
    header {
      height: 6rem;
    }
    .show-sidebar {
      margin-left: 0;
    }
    .side-links {
      display: flex;
      flex-direction: column;
    }
    .side-link {
      padding: 1rem 0;
      padding-left: 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: capitalize;
      color: var(--text-secondary-color);
      transition: padding-left 0.3s ease-in-out;
    }
    .side-link:hover {
      padding-left: 2.5rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
    }
    .active {
      color: var(--primary-500);
    }
  }
`;
export default Wrapper;
