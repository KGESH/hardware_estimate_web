import { z } from 'zod';
import { ramSchema } from '@/schemas/ramSchema';

export type RamDto = z.infer<typeof ramSchema>;
