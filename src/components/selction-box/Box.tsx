import React, { FC } from "react";

interface BoxProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  value: number;
  selected?: boolean;
}

const Box: FC<BoxProps> = ({ value, selected, ...rest }) => {
  let boxClasses =
    " w-16 h-16 py-4 border border-black flex items-center justify-center cursor-pointer font-bold text-2xl transition duration-300";

  selected ? (boxClasses += " bg-black text-white ") : (boxClasses += " ");

  return (
    <div {...rest} className={boxClasses + ""}>
      {value}
    </div>
  );
};

export default Box;
