import { z } from 'zod';
import { estimateAIAnswerSchema } from '@/schemas/estimateSchema';
import { aiAnswerSchema } from '@/schemas/aiSchema';

export type AIAnswerDto = z.infer<typeof aiAnswerSchema>;

export type EstimateAIAnswerDto = z.infer<typeof estimateAIAnswerSchema>;
