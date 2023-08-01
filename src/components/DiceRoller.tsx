import getRandomNumberInRange from "@/helpers/getRandomNumberInRange";
import useGameContext from "@/hooks/useGameContext";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";

const DiceRoller = () => {
  const { selectedNumber, setScore, setError, error }: any = useGameContext();

  const [rolledNumber, setRolledNumber]: any = useState(1);

  const [spin, setSpin] = useState(false);

  const rollDice = () => {
    if (selectedNumber === 0) {
      setError(true);
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from("#diceImage", {
          opacity: 0,
          scale: 0,
          duration: 1,
          y: 200,
          delay: 1,
        })
        .from("#hintText", {
          opacity: 0,
          y: 100,
        });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (e.key === " ") {
        error ? toast.error("Select a number") : !spin && rollDice();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  return (
    <div>
      <div className={spin ? "animate-bounce " : "" + "cursor-pointer"}>
        <div className={spin ? "animate-spin " : "" + "cursor-pointer"}>
          <Image
            priority
            id="diceImage"
            className={spin ? "animate-spin " : "" + "cursor-pointer"}
            src={`/images/dices/dice_${rolledNumber}.png`}
            alt="dice-image"
            width={250}
            height={250}
            onClick={() => {
              error ? toast.error("Select a number") : !spin && rollDice();
            }}
          />
        </div>
      </div>
      <p id="hintText" className="text-center text-2xl">
        Click on Dice to roll
      </p>
    </div>
  );
};

export default DiceRoller;
