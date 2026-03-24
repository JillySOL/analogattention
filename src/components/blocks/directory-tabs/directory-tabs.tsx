'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowUpRightIcon } from 'lucide-react'

export type DirectoryItem = {
  id: string
  title: string
  description: string
  category: string
  url?: string
  tags: string[]
  featured: boolean
}

type Props = {
  items: DirectoryItem[]
  categories: string[]
}

const DirectoryTabs = ({ items, categories }: Props) => {
  const byCategory = (cat: string) => items.filter(i => i.category === cat)
  const allCats = ['All', ...categories]

  return (
    <Tabs defaultValue='All'>
      <TabsList className='h-auto flex-wrap gap-1 bg-transparent p-0 mb-8'>
        {allCats.map(cat => (
          <TabsTrigger
            key={cat}
            value={cat}
            className='rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:border-foreground'
          >
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value='All'>
        <ItemList items={items} />
      </TabsContent>

      {categories.map(cat => (
        <TabsContent key={cat} value={cat}>
          <ItemList items={byCategory(cat)} />
        </TabsContent>
      ))}
    </Tabs>
  )
}

const ItemList = ({ items }: { items: DirectoryItem[] }) => (
  <div className='divide-y divide-border'>
    {items.map(item => (
      <div key={item.id} className='flex items-start justify-between gap-6 py-6'>
        <div className='flex-1 space-y-1.5'>
          <div className='flex items-center gap-3'>
            <a
              href={`/directory/${item.id}`}
              className='font-semibold leading-snug hover:underline hover:underline-offset-2 transition-colors'
            >
              {item.title}
            </a>
            {item.featured && (
              <span className='rounded-full bg-muted px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground'>
                Featured
              </span>
            )}
          </div>
          <p className='text-sm leading-relaxed text-muted-foreground'>{item.description}</p>
          {item.tags.length > 0 && (
            <div className='flex flex-wrap gap-1.5 pt-1'>
              {item.tags.slice(0, 4).map(tag => (
                <span
                  key={tag}
                  className='rounded-full border border-border px-2 py-0.5 text-[0.65rem] text-muted-foreground'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {item.url && (
          <a
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-0.5 shrink-0 text-muted-foreground hover:text-foreground transition-colors'
            aria-label={`Visit external link for ${item.title}`}
          >
            <ArrowUpRightIcon className='size-4' />
          </a>
        )}
      </div>
    ))}
    {items.length === 0 && (
      <p className='py-12 text-center text-muted-foreground'>No entries in this category yet.</p>
    )}
  </div>
)

export default DirectoryTabs
