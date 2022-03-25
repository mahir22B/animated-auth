import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";
import "./Form.css";
import RocketSVG from "./RocketSVG";

const Form = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  function submitForm() {
    setIsSubmit(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <RocketSVG />
        </div>
        {!isSubmit ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;
