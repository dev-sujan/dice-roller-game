"use client";
import Button from "@/components/Button";
import DiceRoller from "@/components/DiceRoller";
import GameRules from "@/components/GameRules";
import Score from "@/components/Score";
import SelectionBoxes from "@/components/selction-box";
import useGameContext from "@/hooks/useGameContext";
import React, { useState } from "react";

const PlayGame = () => {
  const [showRules, setShowRules] = useState(false);
  const { resetScore }: any = useGameContext();

  return (
    <div className="mx-10 m-8 overflow-x-hidden scroll-smooth">
      <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
        <Score />
        <SelectionBoxes />
      </div>
      <div className="flex flex-col items-center gap-8">
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
      </div>
    </div>
  );
};

export default PlayGame;
