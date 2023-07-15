"use client";
import { GameContext } from "@/conext/GameContext";
import { useContext } from "react";

export default function useGameContext() {
  const context = useContext(GameContext);
  return { ...context };
}
