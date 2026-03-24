'use client'

import { Separator } from '@/components/ui/separator'

import type { BlogPost } from '@/components/blocks/blog-component/blog-component'

const Blog = ({ relatedPosts }: { relatedPosts: BlogPost[] }) => {
  if (!relatedPosts.length) return null

  return (
    <section className='border-t border-border py-20 sm:py-28'>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
        <p className='mb-8 text-[0.68rem] font-semibold uppercase tracking-widest text-muted-foreground'>
          Further Reading
        </p>

        <div className='divide-y divide-border'>
          {relatedPosts.map(post => (
            <a
              href={`/blog/${post.slug}`}
              key={post.id}
              className='group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-10'
            >
              <span className='w-32 shrink-0 text-[0.68rem] font-semibold uppercase tracking-widest text-muted-foreground'>
                {post.category}
              </span>
              <div className='flex-1 space-y-1.5'>
                <p className='font-semibold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2'>
                  {post.title}
                </p>
                <p className='line-clamp-2 text-sm leading-relaxed text-muted-foreground'>{post.description}</p>
              </div>
              <div className='flex shrink-0 items-center gap-2 text-xs text-muted-foreground sm:flex-col sm:items-end sm:gap-1'>
                <span>{post.pubDate}</span>
                {post.readTime && (
                  <>
                    <span className='sm:hidden'>&middot;</span>
                    <span>{post.readTime} min</span>
                  </>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

