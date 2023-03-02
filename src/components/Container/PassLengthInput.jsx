import React from "react";
import { usePass } from "../../hooks/usePass";

export const PassLengthInput = () => {
  const { lengthPass, setLengthPass } = usePass();

  return (
    // регулятор довжини пароля
    <div className="mb-[20px]">
      <p className="flex items-center justify-between text-[20px]">
        Password length
        <span className="text-[16px] font-bold">{lengthPass}</span>
      </p>
      <input
        className="w-full h-[3px]"
        type="range"
        min="4"
        max="30"
        step="1"
        value={lengthPass}
        onChange={(e) => setLengthPass(e.target.value)}
      />
    </div>
  );
};
