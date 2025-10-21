import { HeraAreaChart } from "@/components/Hera/HeraAreaChart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      <div className="col-span-4 bg-red-500 p-4 h-[40dvh] text-white">
        <HeraAreaChart/>
      </div>
      <div className="col-span-2 bg-blue-500 p-4 text-white">Half Width (col-span-2)</div>
      <div className="col-span-2 bg-green-500 p-4 text-white">Half Width (col-span-2)</div>
      <div className="col-span-1 bg-purple-500 p-4 text-white">Quarter (col-span-1)</div>
      <div className="col-span-3 bg-orange-500 p-4 text-white">Three Quarters (col-span-3)</div>
    </div>
  );
}
