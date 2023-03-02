import React from "react";

export const Button = ({ onClick, text, styles }) => {
  return (
    <button
      className={`uppercase p-[10px] w-full bg-[#933d2c] text-[#dfd0bb] font-semibold rounded-[10px] hover:bg-[#682b1e] transition duration-300 ${styles}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
