import React from "react";
import { usePass } from "../../hooks/usePass";

export const Pass = () => {
  const { randomPass, copyPass, onCopyPassword } = usePass();

  return (
    <div className="flex items-center text-[20px] border-[2px] border-solid border-[#933d2c] rounded-[10px] p-[10px] mb-[10px]">
      {/* input в якому буде згенерований пароль */}
      <input
        className="bg-transparent w-full"
        type="text"
        disabled
        value={randomPass}
      />
      {/* символ для копіювання */}
      <span
        className={"material-symbols-rounded cursor-pointer"}
        onClick={onCopyPassword}
      >
        {copyPass ? "check" : "copy_all"}
      </span>
    </div>
  );
};
