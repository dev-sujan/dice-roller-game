"use client";
import PlayGameButton from "@/components/PlayGameButton";
import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect } from "react";

const Home = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from("#img", {
          opacity: 0,
          scale: 20,
          duration: 1,
        })
        .from("#text", {
          y: -500,
          opacity: 0,
          duration: 1,
        })
        .from("#playGameBtn", {
          opacity: 1,
          duration: 3,
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className=" p-5 min-h-screen flex flex-col justify-center items-center sm:flex-row">
      <aside className="flex-shrink">
        <Image
          id="img"
          src={"/images/dices.png"}
          width={649}
          height={522}
          alt="dice-image"
        ></Image>
      </aside>
      <div className="flex flex-col items-center sm:items-end text-center ">
        <h1
          id="text"
          className="font-bold uppercase text-[min(12vw,96px)]/[min(14vw,144px)] sm:text-6xl  md:text-7xl md:whitespace-nowrap"
        >
          Dice Game
        </h1>
        <>
          <PlayGameButton id={"playGameBtn"} />
        </>
      </div>
    </main>
  );
};

export default Home;
