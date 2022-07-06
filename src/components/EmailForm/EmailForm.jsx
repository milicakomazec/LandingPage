import React from "react";
import "./index.css";

const EmailForm = () => {
  return (
    <div className="email-form-container">
      <div className="form-title">Handcrafted, home-made masterpieces</div>
      <input
        className="email-input"
        name="email-input"
        placeholder="Enter your email address here"
      ></input>
      <button className="email-btn-submit" type="submit">
        GET STARTED
      </button>
    </div>
  );
};

export default EmailForm;
