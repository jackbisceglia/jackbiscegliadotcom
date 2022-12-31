import z from 'zod';

export const blogMetaSchema = z.object({
  title: z.string(),
  genre: z.enum(['cs', 'reading', 'sports']),
  slug: z.string(),
  date: z.string(),
});
