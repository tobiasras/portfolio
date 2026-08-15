import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const headingClass = 'font-heading font-semibold tracking-tight text-foreground'

export function H1({ className, ...props }: ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(headingClass, 'text-4xl md:text-5xl lg:text-6xl', className)}
      {...props}
    />
  )
}

export function H2({ className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2 className={cn(headingClass, 'text-2xl', className)} {...props} />
  )
}

export function H3({ className, ...props }: ComponentProps<'h3'>) {
  return (
    <h3 className={cn(headingClass, 'text-xl', className)} {...props} />
  )
}
