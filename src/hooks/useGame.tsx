"use client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface useGameStore {
  score: number;
  selectedNumber: number;
  isError: boolean;
  setScore: (score: number) => void;
  setSelectNumber: (selectedNumber: number) => void;
  setIsError: (value: boolean) => void;
  resetScore: () => void;
}

const initialState = {
  score: 0,
  selectedNumber: 0,
  isError: false,
};

export const useGame = create<useGameStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setIsError(value) {
        set(() => ({ isError: value }));
      },
      setScore(score) {
        const newScore = get().score + score;
        set({ score: newScore });
      },
      setSelectNumber(selectedNumber) {
        set({ selectedNumber: selectedNumber });
      },
      resetScore() {
        set({ ...initialState });
      },
    }),
    {
      name: "game-store-state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
