import React from "react";
import { usePass } from "../../hooks/usePass";

export const PassIndicator = () => {
  const { passIndicator } = usePass();

  return (
    // індикатор надійності пароля
    <div
      className={`h-[3px] rounded-[10px] ${passIndicator} mb-[20px] transition-all duration-300 ease-in-out`}
    />
  );
};
