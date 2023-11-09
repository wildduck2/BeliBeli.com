import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", placeholder, ...props }, ref) => {
    return (
      <>
        <input
          className={twMerge(
            `
            bg-[#fbfaf9]
            text-[.75rem]
            font-medium
            text-blackThree
            outline-none
            placeholder:font-medium
            placeholder:text-blackThree
            lg:text-[.9rem]
          `,
            className,
          )}
          type={type}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
      </>
    );
  },
);

Input.displayName = "Input";
export default Input;
