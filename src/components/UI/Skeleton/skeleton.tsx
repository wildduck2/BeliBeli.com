import { cn } from '@/utils'
import React from 'react'

interface SkeletonTypes extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

function Skeleton({ className, ...props }: SkeletonTypes) {
  return <div className={cn('skeleton', className)} {...props} />
}

export { Skeleton }
