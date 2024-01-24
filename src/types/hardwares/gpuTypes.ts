import { IHardware } from '@/types/hardwares/commonTypes';

export type IGpu = IHardware & {
  subVendorName?: string;
};
