import { HeraAreaChart } from "@/components/Hera/HeraAreaChart";
import { HeraComparativeAreaChart } from "@/components/Hera/HeraComparativeAreaChart";
import { HeraHorizontalBarChart } from "@/components/Hera/HeraHorizontalBarChart";
import { HeraPieChart } from "@/components/Hera/HeraPieChart";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      <div className="col-span-4 h-[60dvh] text-white">
        <HeraComparativeAreaChart/>
      </div>
      <div className="col-span-4 h-[60dvh] text-white">
        <HeraAreaChart hasFooter={true}/>
      </div>
      <div className="col-span-2 h-[30dvh] text-white">
        <HeraHorizontalBarChart
          color1="var(--chart-1)"
          color2="var(--chart-2)"
        />
      </div>
      <div className="col-span-2 px-4 py-1 h-[30dvh] text-white">
        <HeraHorizontalBarChart
          color1="var(--chart-1)"
          color2="var(--chart-4)"
        />
      </div>
      <div className="col-span-1 h-[40dvh] text-white">
        <HeraPieChart/>
      </div>
      <div className="col-span-3 h-[40dvh] text-white">
        <HeraAreaChart hasFooter={false}/>
      </div>
    </div>
  );
}
