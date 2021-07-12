import React from "react";
import PropTypes from "prop-types";
import { icons } from "./icons";
import "../../css/Button.css";
export default function OutlineButton({
  icon,
  label,
  color,
  customStyle,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`outline-btn ${color + "-outline-btn"}`}
      style={customStyle}
      onClick={onClick}
    >
      {icon && <i className={icons[icon]}></i>} {label}
    </button>
  );
}
OutlineButton.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
