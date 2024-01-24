import { z } from 'zod';

export const hardWareTypeSchema = z.union([
  z.literal('CPU'),
  z.literal('GPU'),
  z.literal('RAM'),
  z.literal('M/B'),
  z.literal('DISK'),
  z.literal('Other'),
]);

export const hardwareSchema = z.object({
  vendorName: z.string(),
  displayName: z.string(),
  type: hardWareTypeSchema,
});
