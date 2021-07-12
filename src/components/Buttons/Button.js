import React from "react";
import PropTypes from "prop-types";
import { icons } from "./icons";
import "../../css/Button.css";

export default function Button({ icon, label, color, customStyle, onClick }) {
  return (
    <button
      type="button"
      className={`btn ${color + "-btn"}`}
      style={customStyle}
      onClick={onClick}
    >
      {icon && <i className={icons[icon]}></i>} {label}
    </button>
  );
}
Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
