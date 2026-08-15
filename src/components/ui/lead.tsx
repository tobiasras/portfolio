import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type LeadProps = ComponentProps<'p'>

/** Muted intro paragraph. Use for hero copy and supporting descriptions. */
export function Lead({ className, ...props }: LeadProps) {
  return (
    <p
      className={cn('max-w-lg text-base text-muted-foreground md:text-lg', className)}
      {...props}
    />
  )
}
