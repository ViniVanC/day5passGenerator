import React from "react";

export const CheckBox = ({
  id,
  text,
  disabled,
  status,
  styles,
  onCheckedItem,
}) => {
  return (
    <li className={`flex items-center w-1/2 mb-[10px] ${styles}`}>
      <input
        className="cursor-pointer mr-[10px]"
        type="checkbox"
        id={id}
        disabled={disabled}
        checked={status}
        onChange={() => onCheckedItem(id)}
      />
      <label
        className="cursor-pointer"
        htmlFor={id}
        // onClick={() => onCheckedItem(id)}
      >
        {text}
      </label>
    </li>
  );
};
