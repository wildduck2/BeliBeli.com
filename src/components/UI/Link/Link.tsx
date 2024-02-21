import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ href = '/', className, children, ...props }, ref) => {
    return (
      <Link to={href} className={className} {...props} ref={ref}>
        {children}
      </Link>
    );
  }
);

LinkButton.displayName = 'LinkButton';

export default LinkButton;
