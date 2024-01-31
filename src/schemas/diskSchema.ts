import { hardwareSchema } from '@/schemas/hardwareSchema';
import { z } from 'zod';

export const diskKindSchema = z.union([z.literal('hdd'), z.literal('ssd')]);

export const diskSchema = hardwareSchema.extend({
  kind: diskKindSchema,
  totalSpace: z.number().nonnegative().optional(),
});
