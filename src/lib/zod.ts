import z from 'zod';

export const blogMetaSchema = z.object({
  title: z.string(),
  tag: z.array(z.enum(["reading", "cs", "sports"])).optional(),
  slug: z.string(),
  date: z.string(),
});
