import { ICpu } from '@/types/hardwares/cpuTypes';
import { IMotherBoard } from '@/types/hardwares/motherboardTypes';
import { IGpu } from '@/types/hardwares/gpuTypes';
import { IRam } from '@/types/hardwares/ramTypes';
import { IDisk } from '@/types/hardwares/diskTypes';

export type IComputer = {
  cpu: ICpu;
  motherboard: IMotherBoard;
  gpu: IGpu;
  rams: IRam[];
  disks: IDisk[];
};
