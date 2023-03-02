import React from "react";
import { usePass } from "../../hooks/usePass";
import { CheckBox } from "../CheckBox";

export const PassSettings = () => {
  const { characters, onCheckedItem } = usePass();

  return (
    // налаштування для пароля
    <div className="mb-[20px]">
      <p className="flex items-center justify-between text-[20px] mb-[10px]">
        Pass Settings
      </p>
      <ul className="grid grid-rows-2 sm:grid-cols-2 gap-[30px]">
        {characters.map((item) => (
          <CheckBox
            key={item.value}
            id={item.id}
            text={item.text}
            disabled={item.disabled}
            status={item.status}
            onCheckedItem={onCheckedItem}
          />
        ))}
      </ul>
    </div>
  );
};
