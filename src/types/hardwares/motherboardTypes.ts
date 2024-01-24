import { IHardware } from '@/types/hardwares/commonTypes';

export type IMotherBoard = IHardware & {
  chipset?: string;
};
