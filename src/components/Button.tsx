import React, { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...rest }) => {
  let buttonClasses =
    "box-border inline-flex items-center justify-center w-56 px-4 py-2 rounded-md transition duration-300 focus:outline-2 outline-offset-2 outline-gray-500";

  if (variant === "primary") {
    buttonClasses +=
      " bg-black text-white hover:bg-white hover:text-black border border-black ";
  } else if (variant === "secondary") {
    buttonClasses +=
      " bg-white text-black border border-black hover:bg-black hover:text-white ";
  }

  return (
    <button {...rest} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
