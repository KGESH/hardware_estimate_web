import { IHardware } from '@/types/hardwares/commonTypes';

export type IGpu = IHardware & {
  chipset: string;
  subVendorName: string | null;
};
