import React from "react";
import "./form-input.styles.css";

const FormInput = ({ value, onChange, placeholder, type, name }) => {
  return (
    <input
      name={name}
      className="form-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
