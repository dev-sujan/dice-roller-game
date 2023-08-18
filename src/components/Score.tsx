"use client";
import { useGame } from "@/hooks/useGame";
import { useEffect, useState } from "react";

const Score = () => {
  const { score } = useGame();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  if (!isMounted) {
    return null;
  }
  return (
    <div className="inline-flex flex-col items-center">
      <div id={"score"} className=" text-5xl sm:text-8xl">
        {score}
      </div>
      <h3 id={"total"} className="text-xl sm:text-2xl">
        Total Score
      </h3>
    </div>
  );
};

export default Score;
