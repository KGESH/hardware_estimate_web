'use server';

import { ESTIMATE_BACKEND_ENDPOINT_URL } from '@/constants/urls';
import { ComputerSpecDto } from '@/dtos/computer/computer.dto';
import { computerSpecResponseSchema } from '@/schemas/computerSchema';

export async function getComputerSpec(
  encodedId: string,
): Promise<ComputerSpecDto | null> {
  const endpoint = new URL(
    `/computer/${encodedId}`,
    ESTIMATE_BACKEND_ENDPOINT_URL,
  );

  const apiResponse = await fetch(endpoint, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const response = computerSpecResponseSchema.parse(await apiResponse.json());

  // console.log(response);

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
