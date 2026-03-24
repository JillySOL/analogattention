import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string().optional(),
    imageAlt: z.string().optional(),
    pubDate: z.string(),
    author: z.string().default('analogattention'),
    avatarUrl: z.string().optional(),
    category: z.string().default('General'),
    readTime: z.number().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
})

const directory = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/directory' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    pubDate: z.string().optional()
  })
})

export const collections = { blog, directory }
