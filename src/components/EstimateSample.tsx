/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PSUfOE7hOYI
 */
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import { IComputer } from '@/types/hardwares/computerTypes';
import { IHardware } from '@/types/hardwares/commonTypes';

type Props = IComputer;

export default function EstimateSample({
  cpu,
  motherboard,
  gpu,
  rams,
  disks,
}: Props) {
  return (
    <div className="grid gap-6 md:gap-8 p-4 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">User Information</h1>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Enter your phone number" type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" placeholder="Enter your address" />
        </div>
        <Button className="w-full" type="submit" variant="secondary">
          Submit
        </Button>
      </div>
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Used PC Details</h1>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Manufacturer</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/*** CPU ***/}
            {createRow(cpu, 300)}
            {/*** Motherboard ***/}
            {createRow(motherboard, 200)}
            {/*** GPU ***/}
            {createRow(gpu, 1200)}
            {/*** RAM ***/}
            {rams.map((ram, index) => createRow(ram, 150, index))}
            {/*** Disk ***/}
            {disks.map((disk, index) => createRow(disk, 200, index))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function createRow(hardware: IHardware, price: number, key?: string | number) {
  return (
    <TableRow key={key}>
      <TableCell>{hardware.type}</TableCell>
      <TableCell>{hardware.displayName}</TableCell>
      <TableCell>{hardware.vendorName}</TableCell>
      <TableCell>${price}</TableCell>
    </TableRow>
  );
}
