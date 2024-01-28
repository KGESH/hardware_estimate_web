import { z } from 'zod';
import { hardwareSchema } from '@/schemas/hardwareSchema';

export const cpuSchema = hardwareSchema.extend({
  coreCount: z.number(),
  threadCount: z.number().nullable(),
  baseClock: z.number().nullable(),
  boostClock: z.number().nullable(),
});
