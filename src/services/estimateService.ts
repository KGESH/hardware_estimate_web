'use server';
import { ESTIMATE_BACKEND_ENDPOINT_URL } from '@/constants/urls';
import { estimateAIResponseSchema } from '@/schemas/estimateSchema';
import {
  EstimateAIAnswerDto,
  EstimateRequestDto,
} from '@/dtos/estimate/estimate.dto';

export async function getEstimate({
  estimateId,
  encodedId,
}: EstimateRequestDto): Promise<EstimateAIAnswerDto | null> {
  const endpoint = new URL(
    `/estimate/${estimateId}/${encodedId}`,
    ESTIMATE_BACKEND_ENDPOINT_URL,
  );

  const apiResponse = await fetch(endpoint, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!apiResponse.ok) console.error(apiResponse.statusText);

  const response = estimateAIResponseSchema.parse(await apiResponse.json());

  switch (response.status) {
    case 'success':
      return response.data;

    case 'not_found':
      return null;

    case 'error':
    default:
      throw new Error(`[getEstimate] Error: ${response.message}`);
  }
}
