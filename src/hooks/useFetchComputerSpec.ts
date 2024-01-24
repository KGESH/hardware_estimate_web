import { useQuery } from '@tanstack/react-query';
import { getComputerSpec } from '@/services/computerService';

export const useFetchComputerSpec = (encodedId: string) => {
  return useQuery({
    queryFn: () => getComputerSpec(encodedId),
    queryKey: ['computer', encodedId],
  });
};
