import { z } from 'zod';

export const ESTIMATE_BACKEND_ENDPOINT_URL = z
  .string({
    required_error: 'ESTIMATE_BACKEND_ENDPOINT_URL is required',
    invalid_type_error: 'ESTIMATE_BACKEND_ENDPOINT_URL must be a string',
  })
  .parse(process.env.ESTIMATE_BACKEND_ENDPOINT_URL);
