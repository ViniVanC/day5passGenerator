import React from "react";
import { CheckBox } from "./CheckBox";
import { Button } from "./Button";

export const Container = ({
  characters,
  randomPass,
  lengthPass,
  setLengthPass,
  passIndicator,
  copyPass,
  onCopyPassword,
  onCheckedItem,
  generatePass,
}) => {
  return (
    <div className=" max-w-[500px] p-10 rounded-[20px] bg-[#dfd0bb] text-[#933d2c]">
      <h1 className="text-[30px] font-bold mb-[5px]">Pass Generator</h1>

      <hr className="border-b-[1px] border-solid border-[#933d2c86] mb-[20px]" />

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

      {/* індикатор надійності пароля */}
      <div
        className={`h-[3px] rounded-[10px] ${passIndicator} mb-[20px] transition-all duration-300 ease-in-out`}
      />

      {/* регулятор довжини пароля */}
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

      {/* налаштування для пароля  */}
      <div className="mb-[20px]">
        <p className="flex items-center justify-between text-[20px] mb-[10px]">
          Pass Settings
        </p>
        <ul className="flex flex-wrap">
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

      <Button text={"generate pass"} onClick={generatePass} />
    </div>
  );
};
