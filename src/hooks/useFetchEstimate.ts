import { useQuery } from '@tanstack/react-query';
import { getEstimate } from '@/services/estimateService';
import { EstimateRequestDto } from '@/dtos/estimate/estimate.dto';

export const useFetchEstimate = (args: EstimateRequestDto) => {
  const { isPending, data, refetch } = useQuery({
    queryFn: () => getEstimate(args),
    queryKey: ['estimate', args.estimateId, args.estimateId],
    refetchInterval: 3000,
  });

  return {
    isPending: isPending || data?.status === 'draft',
    estimate:
      data && data.status !== 'draft' && data.status !== 'error'
        ? data.estimates
        : null,
    refetch,
  };
};
