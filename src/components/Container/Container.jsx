import React from "react";
import { Button } from "../Button";
import { usePass } from "../../hooks/usePass";
import { ContainerHeader } from "./ContainerHeader";
import { Pass } from "./Pass";
import { PassIndicator } from "./PassIndicator";
import { PassLengthInput } from "./PassLengthInput";
import { PassSettings } from "./PassSettings";

export const Container = () => {
  const { generatePass } = usePass();

  return (
    <div className=" max-w-[500px] p-10 rounded-[20px] bg-[#dfd0bb] text-[#933d2c]">
      <ContainerHeader title={"Pass Generator"} />

      <Pass />

      <PassIndicator />

      <PassLengthInput />

      <PassSettings />

      <Button text={"generate pass"} onClick={generatePass} />
    </div>
  );
};
