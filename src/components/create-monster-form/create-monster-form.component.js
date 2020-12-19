import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import FormInput from "../form-input/form-input.component";
import "./create-monster-form.styles.css";

const CreateMonsterForm = ({ submitAction }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { addToast } = useToasts();

  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      return addToast("Fields can't be blank", {
        appearance: "error",
        autoDismiss: true,
      });
    }

    submitAction(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <div>
      <FormInput
        name={"name"}
        type={"text"}
        placeholder={"Name"}
        onChange={handleOnChange}
        value={formData.name}
      />
      <FormInput
        name={"email"}
        type={"email"}
        placeholder={"Email"}
        onChange={handleOnChange}
        value={formData.email}
      />
      <button className="submit-button" onClick={handleSubmit}>
        Create Monster
      </button>
    </div>
  );
};

export default CreateMonsterForm;
