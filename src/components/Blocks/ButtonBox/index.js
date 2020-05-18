import React from "react";
import { labels } from "../../../constant";
import "./style.css";

const ButtonBox = ({ onClick, label, type }) => {
  return (
      <button className={`xav-form__button ${type}`} onClick={onClick}>
        {label ? label : labels.submitBtn}
      </button>
  );
};

export default ButtonBox;
