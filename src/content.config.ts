import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    category: z.string(),           // 'analyzer' | 'canine-feline'
    catNo: z.string().optional(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    order: z.number().optional(),
    // key attributes table
    attributes: z.record(z.string()).optional(),
    // FAQ for schema + AIO
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    category: z.string().optional(),  // 'blog' | 'core-technology'
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { products, blog, pages };
