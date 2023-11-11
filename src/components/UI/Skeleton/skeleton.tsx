import React from "react";
import cn from "../../../utils/cn";

interface SkeletonTypes extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
}

function Skeleton({ className, ...props }: SkeletonTypes) {
  return <div className={cn("skeleton", className)} {...props} />;
}

export { Skeleton };
