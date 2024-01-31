import { z } from 'zod';
import { hardwareSchema } from '@/schemas/hardwareSchema';

export const motherboardSchema = hardwareSchema.extend({
  chipset: z.string(),
});
