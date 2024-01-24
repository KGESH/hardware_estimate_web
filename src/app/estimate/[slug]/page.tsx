import { redirect } from 'next/navigation';
import EstimatePanel from '@/components/EstimatePanel';

type Props = { params: { slug: string } };

export default function EstimatePage({ params: { slug } }: Props) {
  if (!slug) redirect('/estimate');

  return (
    <main>
      <EstimatePanel encodedId={slug} />
    </main>
  );
}
