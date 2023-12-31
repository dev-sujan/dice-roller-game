import getRandomNumberInRange from "@/helpers/getRandomNumberInRange";
import { useGame } from "@/hooks/useGame";
import { cn } from "@/libs/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DiceRoller = () => {
  const { selectedNumber, isError, setIsError, setScore } = useGame();

  const [rolledNumber, setRolledNumber]: any = useState(1);

  const [spin, setSpin] = useState(false);

  const rollDice = () => {
    if (selectedNumber === 0) {
      setIsError(true);
      return;
    }

    setSpin(true);

    setTimeout(() => {
      const randNum = getRandomNumberInRange(1, 6);
      setRolledNumber(() => randNum);

      if (randNum !== selectedNumber) {
        setScore(-2);
      } else {
        setScore(10);
      }

      setSpin(false);
    }, 1500);
  };


  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (e.key === " ") {
        isError ? toast.error("Select a number") : !spin && rollDice();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  return (
    <>
      <div
        className={cn(
          "cursor-pointer h-56 w-56 sm:h-full sm:w-full",
          spin && "animate-bounce "
        )}
      >
        <div className={cn("cursor-pointer  ", spin && "animate-spin ")}>
          <Image
            priority
            id="diceImage"
            className={cn("cursor-pointer", spin && "animate-spin ")}
            src={`/images/dices/dice_${rolledNumber}.png`}
            alt="dice-image"
            width={250}
            height={250}
            onClick={() => {
              isError ? toast.error("Select a number") : !spin && rollDice();
            }}
          />
        </div>
      </div>
      <p id="hintText" className="text-center text-2xl">
        Click on Dice to roll
      </p>
    </>
  );
};

export default DiceRoller;
