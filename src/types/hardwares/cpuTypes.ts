import { IHardware } from '@/types/hardwares/commonTypes';

export type ICpu = IHardware & {
  coreCount?: number;
  threadCount?: number;
  baseClock?: number;
  boostClock?: number;
};