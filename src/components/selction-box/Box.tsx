import { cn } from "@/libs/utils";
import React, { FC } from "react";

interface BoxProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  value: number;
  selected?: boolean;
}

const Box: FC<BoxProps> = ({ value, selected, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn(
        "w-10 h-10 py-4 sm:w-16 sm:h-16 sm:py-4 border border-black flex items-center justify-center cursor-pointer font-bold text-2xl transition duration-300",
        selected && " bg-black text-white "
      )}
    >
      {value}
    </div>
  );
};

export default Box;
