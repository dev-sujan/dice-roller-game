"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";

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
