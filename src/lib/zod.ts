import z from 'zod';

export const blogMetaSchema = z.object({
  title: z.string(),
  tag: z.array(z.enum(["reading", "cs", "sports"])).optional(),
  summary: z.string(),
  slug: z.string(),
  date: z.string(),
});
