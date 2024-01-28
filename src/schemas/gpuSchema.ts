import { z } from 'zod';
import { hardwareSchema } from '@/schemas/hardwareSchema';

export const gpuSchema = hardwareSchema.extend({
  chipset: z.string(),
  subVendorName: z.string().nullable(),
});
