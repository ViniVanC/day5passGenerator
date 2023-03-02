import React from "react";

export const ContainerHeader = ({ title, hr = true, children }) => {
  return (
    <>
      <h1 className="text-[30px] font-bold mb-[5px]">{title}</h1>

      {children}

      {hr ? (
        <hr className="border-b-[1px] border-solid border-[#933d2c86] mb-[20px]" />
      ) : (
        ""
      )}
    </>
  );
};
