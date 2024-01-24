import { hardwareSchema } from '@/schemas/hardwareSchema';
import { z } from 'zod';

export const diskSchema = hardwareSchema.extend({
  kind: z.string().optional(),
  totalSpace: z.number().nonnegative().optional(),
});
