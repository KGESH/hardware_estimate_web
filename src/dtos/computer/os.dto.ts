import { z } from 'zod';
import { osSchema } from '@/schemas/osSchema';

export type OsDto = z.infer<typeof osSchema>;
