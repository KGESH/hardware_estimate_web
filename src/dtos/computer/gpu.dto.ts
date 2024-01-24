import { z } from 'zod';
import { gpuSchema } from '@/schemas/gpuSchema';

export type GpuDto = z.infer<typeof gpuSchema>;
