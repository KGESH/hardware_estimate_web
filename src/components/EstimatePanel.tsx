'use client';
import { useFetchEstimate } from '@/hooks/useFetchEstimate';
import { Estimate } from '@/components/Estimate';
import { useFetchComputerSpec } from '@/hooks/useFetchComputerSpec';
import { useRouter } from 'next/navigation';
import { EstimateRequestDto } from '@/dtos/estimate/estimate.dto';

type Props = EstimateRequestDto;

export default function EstimatePanel({ estimateId, encodedId }: Props) {
  const router = useRouter();
  const pcSpecQuery = useFetchComputerSpec(encodedId);
  const estimateQuery = useFetchEstimate({ estimateId, encodedId });

  if (pcSpecQuery.isPending) return <div>Loading...</div>;

  if (!pcSpecQuery.data) router.replace('/estimate');

  // if (estimateQuery.isPending) return <div>Loading...</div>;

  return (
    <>
      {pcSpecQuery.data?.computer && (
        <Estimate {...pcSpecQuery.data.computer} />
      )}
      {estimateQuery.isPending ? (
        <div>estimateQuery.isPending...</div>
      ) : (
        <div>
          <h1>Estimate DONE</h1>
          {JSON.stringify(estimateQuery.estimate)}
        </div>
      )}
    </>
  );
}
