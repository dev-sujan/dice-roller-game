"use client";
import useGameContext from "@/hooks/useGameContext";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Score = () => {
  const { score } = useGameContext();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from("#score", {
          opacity: 0,
          x: -200,
          duration: 1,
        })
        .from("#total", {
          opacity: 0,
          y: 300,
          duration: 0.5,
        });
    });

    return () => ctx.revert();
  }, []);

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
