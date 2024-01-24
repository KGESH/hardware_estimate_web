import { z } from 'zod';
import { motherboardSchema } from '@/schemas/motherboardSchema';

export type MotherboardDto = z.infer<typeof motherboardSchema>;
