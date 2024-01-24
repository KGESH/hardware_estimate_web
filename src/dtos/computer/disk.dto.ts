import { z } from 'zod';
import { diskSchema } from '@/schemas/diskSchema';

export type DiskDto = z.infer<typeof diskSchema>;
