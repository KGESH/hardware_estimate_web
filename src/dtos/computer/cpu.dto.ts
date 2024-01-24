import { z } from 'zod';
import { cpuSchema } from '@/schemas/cpuSchema';

export type CpuDto = z.infer<typeof cpuSchema>;
