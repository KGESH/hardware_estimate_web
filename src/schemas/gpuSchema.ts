import { z } from 'zod';
import { hardwareSchema } from '@/schemas/hardwareSchema';

export const gpuSchema = hardwareSchema.extend({
  subVendorName: z.string().optional(),
});
