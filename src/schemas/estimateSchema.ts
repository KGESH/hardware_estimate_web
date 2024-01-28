import { z } from 'zod';
import { aiAnswerSchema } from '@/schemas/aiSchema';
import { createResponseSchema } from '@/schemas/responseSchema';
import { hardwareSchema } from '@/schemas/hardwareSchema';

export const aiEstimatePartSchema = z.object({
  shopId: z.string().uuid(),
  hardware: hardwareSchema,
  aiAnswer: aiAnswerSchema,
});

export const estimatedStatusSchema = z.union([
  z.literal('estimated'),
  z.literal('pickup'),
  z.literal('checking'),
  z.literal('approved'),
  z.literal('paid'),
]);

export const aiEstimateDraftSchema = z.object({
  status: z.literal('draft'),
});

export const aiEstimateErrorSchema = z.object({
  status: z.literal('error'),
  message: z.string(),
});

export const aiEstimateSuccessSchema = z.object({
  status: estimatedStatusSchema,
  estimates: aiEstimatePartSchema.array(),
});

export const estimateAIAnswerSchema = z.union([
  aiEstimateDraftSchema,
  aiEstimateErrorSchema,
  aiEstimateSuccessSchema,
]);

export const estimateAIResponseSchema = createResponseSchema(
  estimateAIAnswerSchema,
);

export const estimateRequestSchema = z.object({
  estimateId: z.string().uuid(),
  encodedId: z.string(),
});
