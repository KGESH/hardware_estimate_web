// 'use client';
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/OmXJEeP9mI6
 */
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IComputer } from '@/types/hardwares/computerTypes';
import { IHardware } from '@/types/hardwares/commonTypes';

type Props = Partial<IComputer>;

export function Estimate({ cpu, motherboard, gpu, rams, disks }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center my-4">
          Buyer Information
        </h2>
        <form className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              type="tel"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your address" />
          </div>
          <Button variant="secondary" className="w-full my-4">
            Submit
          </Button>
        </form>

        <h2 className="text-2xl font-bold text-center mb-4">Used PC Details</h2>
        <div className="grid gap-4">
          {/*** CPU ***/}
          {cpu && createRow(cpu)}
          {/*** Motherboard ***/}
          {motherboard && createRow(motherboard)}
          {/*** GPU ***/}
          {gpu && createRow(gpu)}
          {/*** RAM ***/}
          {rams?.map((ram, index) => createRow(ram, index))}
          {/*** Disk ***/}
          {disks?.map((disk, index) => createRow(disk, index))}
        </div>
      </div>
    </div>
  );
}

function createRow(hardware: IHardware, key?: string | number) {
  return (
    <div key={key} className="flex items-center justify-between">
      <span className="font-medium">{hardware.type}:</span>
      <span>{hardware.displayName}</span>
    </div>
  );
}