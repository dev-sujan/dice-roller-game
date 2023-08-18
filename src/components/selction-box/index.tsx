"use client";
import { useGame } from "@/hooks/useGame";
import { useEffect, useRef } from "react";
import Box from "./Box";

const SelectionBoxes = () => {
  const numbers: number[] = Array(6)
    .fill(0)
    .map((_, index) => index + 1);

  const { setSelectNumber, selectedNumber, setIsError } = useGame();

  useEffect(() => {
    const handleKeydown = (e: any) => {
      numbers.forEach((num) => {
        if (num.toString() === e.key) {
          setSelectNumber(num);
          setIsError(false);
        }
      });
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  });

  return (
    <div className="mt-4 inline-flex flex-col gap-2 items-center sm:items-end">
      <div className="grid grid-cols-3 gap-x-5 gap-y-2 sm:flex sm:gap-5">
        {numbers.map((num) => (
          <Box
            id="box"
            key={num}
            value={num}
            onClick={() => {
              setSelectNumber(num);
              setIsError(false);
            }}
            selected={num === selectedNumber}
          />
        ))}
      </div>
      <h3 className="font-bold text-2xl">Select Number</h3>
    </div>
  );
};

export default SelectionBoxes;
