import React from "react";

export const CheckBox = ({ id, text, disabled, styles }) => {
  return (
    <li className={`flex items-center w-1/2 mb-[10px] ${styles}`}>
      <input
        className="cursor-pointer mr-[10px]"
        type="checkbox"
        id={id}
        disabled={disabled}
      />
      <label className="cursor-pointer" htmlFor={id}>
        {text}
      </label>
    </li>
  );
};
