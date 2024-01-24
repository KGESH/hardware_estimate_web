import { z } from 'zod';
import { osSchema } from '@/schemas/osSchema';
import { cpuSchema } from '@/schemas/cpuSchema';
import { motherboardSchema } from '@/schemas/motherboardSchema';
import { gpuSchema } from '@/schemas/gpuSchema';
import { ramSchema } from '@/schemas/ramSchema';
import { diskSchema } from '@/schemas/diskSchema';
import { createResponseSchema } from '@/schemas/responseSchema';

export const computerSchema = z.object({
  os: osSchema,
  cpu: cpuSchema,
  motherboard: motherboardSchema.optional(),
  gpu: gpuSchema.optional(),
  rams: ramSchema.array(),
  disks: diskSchema.array(),
});

export const computerSpecSchema = z.object({
  encodedId: z.string(),
  computer: computerSchema,
});

export const computerSpecResponseSchema =
  createResponseSchema(computerSpecSchema);
