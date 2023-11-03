import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ href = "/", className, children, ...props }, ref) => {
    return (
      <Link
        to={href}
        className={twMerge(
          `
          text-[.75rem]
          font-semibold
          capitalize 
          text-blackForth
          transition
          lg:text-[.813rem]
          `,
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";

export default LinkButton;
