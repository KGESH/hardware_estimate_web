import { z } from 'zod';
import { hardwareSchema } from '@/schemas/hardwareSchema';

export const cpuSchema = hardwareSchema.extend({
  coreCount: z.number().optional(),
  threadCount: z.number().optional(),
  baseClock: z.number().optional(),
  boostClock: z.number().optional(),
});
