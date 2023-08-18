"use client";
import Button from "@/components/Button";
import DiceRoller from "@/components/DiceRoller";
import GameRules from "@/components/GameRules";
import Score from "@/components/Score";
import SelectionBoxes from "@/components/selction-box";
import { useGame } from "@/hooks/useGame";
import { useState } from "react";
import { motion } from "framer-motion";

const PlayGame = () => {
  const [showRules, setShowRules] = useState(false);
  const { resetScore } = useGame();

  return (
    <motion.div
      className="m-2 sm:mx-10 sm:my-8 overflow-x-hidden scroll-smooth"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3, type: "just" }}
    >
      <motion.h1
        id="heading"
        className="font-bold uppercase text-center whitespace-nowrap text-3xl sm:text-6xl  md:text-7xl md:whitespace-nowrap"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        🎲Dice Roller🎲
      </motion.h1>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
        <Score />
        <SelectionBoxes />
      </div>
      <main className="flex flex-col items-center gap-5 sm:gap-8">
        <div className="flex flex-col gap-2 sm:gap-6 items-center">
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
    </motion.div>
  );
};

export default PlayGame;
