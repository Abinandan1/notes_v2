import React from "react";
const FormRow = ({ labelText, name, type }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input name={name} required type={type || name} className="form-input" />
    </div>
  );
};
export default FormRow;
