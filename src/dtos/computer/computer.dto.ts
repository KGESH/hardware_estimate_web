import { z } from 'zod';
import { computerSchema, computerSpecSchema } from '@/schemas/computerSchema';

export type ComputerDto = z.infer<typeof computerSchema>;

export type ComputerSpecDto = z.infer<typeof computerSpecSchema>;
