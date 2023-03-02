import React from "react";

export const Button = ({ onClick, text, ...props }) => {
  return (
    <button className=" uppercase" onClick={onClick}>
      {text}
    </button>
  );
};
