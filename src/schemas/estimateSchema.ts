import { z } from 'zod';
import { aiAnswerSchema } from '@/schemas/aiSchema';
import { createResponseSchema } from '@/schemas/responseSchema';
import { hardwareSchema } from '@/schemas/hardwareSchema';

export const aiEstimatePartSchema = z.object({
  shopId: z.string().uuid(),
  hardware: hardwareSchema,
  estimate: aiAnswerSchema,
});

export const aiEstimatePendingSchema = z.object({
  status: z.literal('pending'),
});

export const aiEstimateErrorSchema = z.object({
  status: z.literal('error'),
  message: z.string(),
});

export const aiEstimateSuccessSchema = z.object({
  status: z.literal('success'),
  estimates: aiEstimatePartSchema.array(),
});

export const estimateAIAnswerSchema = z.union([
  aiEstimatePendingSchema,
  aiEstimateErrorSchema,
  aiEstimateSuccessSchema,
]);

export const estimateAIResponseSchema = createResponseSchema(
  estimateAIAnswerSchema,
);
