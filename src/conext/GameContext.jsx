"use client";
import React, { createContext, useState, useEffect, useReducer } from "react";

const ACTION = {
  INIT_STORED: "INIT_STORED",
  SET_SCORE: "SET_SCORE",
  SET_SELECT: "SET_SELECT",
  REST_SCORE: "REST_SCORE",
  SET_ERROR: "SET_ERROR",
};

const initialState = {
  score: 0,
  selectedNumber: 0,
  error: false,
};

export const GameContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case ACTION.REST_SCORE:
      return {
        ...state,
        score: 0,
        selectedNumber: 0,
      };
    case ACTION.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTION.SET_SELECT:
      return {
        ...state,
        selectedNumber: action.payload,
      };

    case ACTION.SET_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };
    default:
      return state;
  }
}

const GameContextProvider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const stored = localStorage.getItem("game");
    return stored ? JSON.parse(stored) : initialState;
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("game", JSON.stringify(state));
  }, [state]);

  if (!isMounted) {
    return null;
  }

  const resetScore = () => dispatch({ type: ACTION.REST_SCORE });

  const setError = (message) =>
    dispatch({ type: ACTION.SET_ERROR, payload: message });

  const setScore = (score) =>
    dispatch({ type: ACTION.SET_SCORE, payload: score });

  const setSelect = (selectedNumber) =>
    dispatch({ type: ACTION.SET_SELECT, payload: selectedNumber });

  return (
    <GameContext.Provider
      value={{
        score: state.score,
        selectedNumber: state.selectedNumber,
        error: state.error,
        setSelect,
        setScore,
        resetScore,
        setError,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
