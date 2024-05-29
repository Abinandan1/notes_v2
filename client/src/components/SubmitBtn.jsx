import React from "react";
const SubmitBtn = ({ value }) => {
  return (
    <button type="submit" className="btn btn-block">
      {value}
    </button>
  );
};
export default SubmitBtn;
