"use client";
import PlayGameButton from "@/components/PlayGameButton";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  return (
    <motion.main className=" p-5 min-h-[100dvh] flex flex-col justify-center items-center sm:flex-row overflow-hidden"
      animate={{scale: 1}}
      exit={{scale: 2}}
    >
      <motion.aside
        className="flex-shrink"
        initial={{ scale: 2, opacity: 0 }}
        animate={{ rotate: 360 * 3, scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 35,
        }}
      >
        <Image
          id="img"
          src={"/images/dices.png"}
          width={649}
          height={522}
          alt="dice-image"
          priority
        ></Image>
      </motion.aside>
      <div className="flex flex-col items-center sm:items-end text-center ">
        <motion.h1
          id="text"
          className="font-bold uppercase text-[min(12vw,96px)]/[min(14vw,144px)] sm:text-6xl  md:text-7xl md:whitespace-nowrap"
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Roll Master
        </motion.h1>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <PlayGameButton id={"playGameBtn"} />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Home;
