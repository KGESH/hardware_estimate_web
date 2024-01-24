import { z } from 'zod';
import { aiAnswerSchema } from '@/schemas/aiSchema';
import { createResponseSchema } from '@/schemas/responseSchema';

export const estimateAIAnswerPendingSchema = z.object({
  status: z.literal('pending'),
});

export const estimateAIAnswerErrorSchema = z.object({
  status: z.literal('error'),
  message: z.string(),
});

export const estimateAIAnswerSuccessSchema = z.object({
  status: z.literal('success'),
  estimate: aiAnswerSchema,
});

export const estimateAIAnswerSchema = z.union([
  estimateAIAnswerPendingSchema,
  estimateAIAnswerErrorSchema,
  estimateAIAnswerSuccessSchema,
]);

export const estimateAIResponseSchema = createResponseSchema(
  estimateAIAnswerSchema,
);
