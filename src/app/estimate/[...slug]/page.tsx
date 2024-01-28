import { redirect } from 'next/navigation';
import EstimatePanel from '@/components/EstimatePanel';

type Props = { params: { slug: string[] } };

export default function EstimatePage({ params: { slug } }: Props) {
  console.log(`EstimatePage`, slug);
  if (!slug || slug.length < 2) redirect('/estimate');

  const [estimateId, encodedId] = slug;

  return (
    <main>
      <EstimatePanel estimateId={estimateId} encodedId={encodedId} />
    </main>
  );
}
