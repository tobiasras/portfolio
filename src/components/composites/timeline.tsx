import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export type TimelineItem = {
  title: string
  org: string
  location?: string
  start: string
  end: string
  description?: string
  tags?: string[]
  logo?: string
}

type TimelineProps = {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn('relative ms-3 space-y-8 border-s border-border', className)}>
      {items.map((item) => (
        <li
          key={`${item.org}-${item.title}-${item.start}`}
          className="relative ms-6"
        >
          {item.logo ? (
            <span className="absolute -start-10 size-8 overflow-hidden rounded-md border border-border bg-background ring-4 ring-background">
              <img
                src={item.logo}
                alt=""
                className="size-full object-contain"
              />
            </span>
          ) : (
            <span className="absolute -start-[1.9375rem] mt-1.5 size-3 rounded-full border-2 border-background bg-foreground" />
          )}
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="font-medium text-foreground">{item.title}</h3>
            <span className="text-muted-foreground">· {item.org}</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {item.start} – {item.end}
            {item.location ? ` · ${item.location}` : null}
          </p>
          {item.description ? (
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {item.description}
            </p>
          ) : null}
          {item.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  )
}
