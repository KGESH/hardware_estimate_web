import { z } from 'zod';
import { hardwareSchema } from '@/schemas/hardwareSchema';

export type HardwareDto = z.infer<typeof hardwareSchema>;
