import React from "react";

export default function Ballon({ color, handleEvent }) {
  return (
    <div
      className={`balloon ${color}-balloon`}
      onClick={handleEvent}
      onMouseOver={handleEvent}
    ></div>
  );
}
