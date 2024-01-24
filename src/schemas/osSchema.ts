import { z } from 'zod';

export const osSchema = z.object({
  name: z.string(),
});
