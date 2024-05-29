import Wrapper from "../wrappers/EditBtn";

const EditBtn = ({ id, submitForm, view, icon }) => {
  return (
    <Wrapper>
      <button
        type="submit"
        onClick={(e) => submitForm(e)}
        className="edit-btn"
        id={`${id}`}
      >
        {icon}
        {view === "grid" ? id : ""}
      </button>
    </Wrapper>
  );
};
export default EditBtn;
