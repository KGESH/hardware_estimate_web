import { IHardware } from '@/types/hardwares/commonTypes';

export type ICpu = IHardware & {
  coreCount: number;
  threadCount: number | null;
  baseClock: number | null;
  boostClock: number | null;
};
