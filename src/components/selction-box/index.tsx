"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import Box from "./Box";
import useGameContext from "@/hooks/useGameContext";
import gsap from "gsap";

const SelectionBoxes = () => {
  const numbers: number[] = Array(6)
    .fill(0)
    .map((_, index) => index + 1);

  const { setSelect, error, selectedNumber, setError }: any = useGameContext();

  const errorMessage = useRef(null);
  const boxRef = useRef(null);
  const selectNumRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(boxRef.current, {
          opacity: 0,
          x: 500,
          duration: 1,
        })
        .from(selectNumRef.current, {
          opacity: 0,
          y: 300,
          duration: 0.5,
        });
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (error) {
        gsap
          .timeline()
          .from(errorMessage.current, {
            y: -100,
            duration: 0.5,
          })
          .to(errorMessage.current, {
            y: -10,
            repeat: -1,
            yoyo: true,
          });
      }
    });

    return () => ctx.revert();
  }, [error]);

  return (
    <div className="inline-flex flex-col gap-2 items-end">
      <p id="error" ref={errorMessage} className=" text-red-500  ">
        {error ? "You have not selected any number" : ""}
      </p>

      <div ref={boxRef} className="flex gap-5">
        {numbers.map((num) => (
          <Box
            id="box"
            key={num}
            value={num}
            onClick={() => {
              setSelect(num);
              setError(false);
            }}
            selected={num === selectedNumber}
          />
        ))}
      </div>
      <h3 ref={selectNumRef} className="font-bold text-2xl">
        Select Number
      </h3>
    </div>
  );
};

export default SelectionBoxes;
