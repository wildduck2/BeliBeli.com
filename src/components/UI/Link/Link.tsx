import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ href = '/', className, children, ...props }, ref) => {
    return (
      <Link
        to={href}
        className={twMerge(
          `
          text-blackForth
          font-semibold
          text-[.75rem] 
          lg:text-[.813rem]
          capitalize
          hover:opacity-95
          transition
          `,
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </Link>
    )
  }
)

LinkButton.displayName = 'LinkButton'

export default LinkButton
