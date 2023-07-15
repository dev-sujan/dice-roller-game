"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const PlayGameButton = ({ ...rest }) => {
  const router = useRouter();
  return (
    <Button
      {...rest}
      variant="primary"
      onClick={() => router.push("/play-game")}
    >
      Play Now
    </Button>
  );
};

export default PlayGameButton;
