"use client";
import Button from "@/components/Button";
import DiceRoller from "@/components/DiceRoller";
import GameRules from "@/components/GameRules";
import Score from "@/components/Score";
import SelectionBoxes from "@/components/selction-box";
import useGameContext from "@/hooks/useGameContext";
import gsap from "gsap";
import React, { useLayoutEffect, useState } from "react";

const PlayGame = () => {
  const [showRules, setShowRules] = useState(false);
  const { resetScore }: any = useGameContext();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#heading", {
        opacity: 0,
        y: 200,
        duration: 0.7,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="mx-10 m-8 overflow-x-hidden scroll-smooth">
      <h1
        id="heading"
        className="font-bold uppercase text-center text-[min(12vw,96px)]/[min(14vw,144px)] sm:text-6xl  md:text-7xl md:whitespace-nowrap"
      >
        🎲 Dice Roller 🎲
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
        <Score />
        <SelectionBoxes />
      </div>
      <main className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-6 items-center">
          <DiceRoller />
          <Button id="reset" variant="secondary" onClick={() => resetScore()}>
            Reset Score
          </Button>
          <Button
            id="rule"
            variant="primary"
            onClick={() => setShowRules((prev) => !prev)}
          >
            {!showRules ? "Show" : "Hide"} Rules
          </Button>
        </div>
        {showRules && <GameRules />}
      </main>
    </div>
  );
};

export default PlayGame;
