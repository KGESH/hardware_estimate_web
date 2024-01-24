import { useQuery } from '@tanstack/react-query';
import { getEstimate } from '@/services/estimateService';
import { IComputer } from '@/types/hardwares/computerTypes';
import { ICpu } from '@/types/hardwares/cpuTypes';
import { IMotherBoard } from '@/types/hardwares/motherboardTypes';
import { IGpu } from '@/types/hardwares/gpuTypes';
import { IRam } from '@/types/hardwares/ramTypes';
import { IDisk } from '@/types/hardwares/diskTypes';

function getHardwareSpecs(): IComputer {
  // Todo: get hardware specs from windows api
  const cpu: ICpu = {
    type: 'CPU',
    displayName: 'Intel Core i7-8700K',
    vendorName: 'Intel',
  };
  const motherBoard: IMotherBoard = {
    type: 'M/B',
    displayName: 'MSI Z370 GAMING PRO CARBON AC',
    vendorName: 'MSI',
  };
  const gpu: IGpu = {
    type: 'GPU',
    displayName: 'NVIDIA GeForce RTX 4090',
    vendorName: 'NVIDIA',
  };
  const rams: IRam[] = [
    {
      type: 'RAM',
      displayName: '8GB DDR4',
      vendorName: 'MICRON',
    },
    {
      type: 'RAM',
      displayName: '16GB DDR4',
      vendorName: 'SAMSUMG',
    },
  ];
  const disks: IDisk[] = [
    {
      type: 'DISK',
      displayName: '512GB SSD',
      vendorName: 'WESTERN DIGITAL',
    },
    {
      type: 'DISK',
      displayName: '1TB SSD',
      vendorName: 'SAMSUMG',
    },
  ];

  return {
    cpu,
    motherboard: motherBoard,
    gpu,
    rams,
    disks,
  };
}

export const useFetchEstimate = (encodedId: string) => {
  const { isPending, data, refetch } = useQuery({
    queryFn: () => getEstimate(encodedId),
    queryKey: ['estimate', encodedId],
    refetchInterval: 3000,
  });

  return {
    isPending: isPending || data?.status === 'pending',
    estimate: data?.status === 'success' ? data.estimate : null,
    refetch,
  };
};
