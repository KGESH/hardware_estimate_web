import { z } from 'zod';

export const hardWareTypeSchema = z.union([
  z.literal('CPU'),
  z.literal('GPU'),
  z.literal('RAM'),
  z.literal('MB'),
  z.literal('DISK'),
  z.literal('OTHER'),
]);

export const hardwareSchema = z.object({
  hwKey: z.string(),
  vendorName: z.string(),
  displayName: z.string(),
  type: hardWareTypeSchema,
});
