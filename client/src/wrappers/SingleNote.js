import styled from "styled-components";
import { fonts } from "../utils/fonts-colors";
const Wrapper = styled.div`
  display: flex;
  background: ${(props) => props.bg};
  min-height: calc(100vh - 6rem);
  [contentEditable="true"]:empty:before {
    content: attr(placeholder);
    color: rgba(var(--box-shadow-color), 0.6);
    text-transform: capitalize;
    font-family: ${fonts[9]};
    letter-spacing: 1px;
  }
  .back-btn {
    color: var(--primary-500);
    font-size: clamp(0.5rem, 10vw, 1rem);
  }
  .edit-panel {
    margin-bottom: 2rem;
  }
  .section-center {
    padding: 2rem 0;
    margin: 0 auto;
    width: 90%;
  }
  .note-title {
    border-bottom: 2px solid var(--primary-500);
    margin-bottom: 1rem;
    overflow: hidden;
    padding-bottom: 0.5rem;
  }
  .title-input {
    overflow: hidden;
  }
  .note-description {
    overflow: hidden;
    margin-bottom: 2rem;
  }
  .description-input {
    overflow: hidden;
  }
  .fields {
    display: grid;
    /* width: 100%; */
  }
  .btn {
    margin: 0 auto;
  }
  .options {
    display: grid;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    width: 6rem;
    grid-template-columns: repeat(3, 2rem);
    background: var(--bg-color);
    margin: 0 auto;
    justify-items: center;
    margin-top: 2rem;
  }
  .edit-btn {
    border-radius: var(--border-radius);
  }
  .edit-btn-name {
    display: none;
    transition: var(--transition);
    padding: 0.25rem;
  }
  .show-edit-btn-name {
    display: block;
    margin-top: 1rem;
  }
`;
export default Wrapper;
