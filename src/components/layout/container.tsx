import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = ComponentProps<'div'>

/** Shared page width + horizontal padding. Use for every page section. */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-7xl px-6 md:px-10', className)}
      {...props}
    />
  )
}
