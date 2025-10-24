"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts"
import { Option } from '@/src/components/ui/multiple-selector';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/src/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select"
import { HeraMultiSelect } from "./HeraMultiSelect"

import { data as data2016 } from "@/public/docs/2016-data";
import { data as data2017 } from "@/public/docs/2017-data";
import { data as data2018 } from "@/public/docs/2018-data";
import { data as data2019 } from "@/public/docs/2019-data";
import { data as data2020 } from "@/public/docs/2020-data";
import { data as data2021 } from "@/public/docs/2021-data";
import { data as data2022 } from "@/public/docs/2022-data";
import { data as data2023 } from "@/public/docs/2023-data";
import { data as data2024 } from "@/public/docs/2024-data";
import { data as data2025 } from "@/public/docs/2025-data";

export const description = "An interactive area chart"

const chartConfig = {
    vendas: {
        label: "Visitors",
    },
    config2018: {
        label: "2018",
        color: "var(--chart-1)",
    }
} satisfies ChartConfig

const OPTIONS: Option[] = [
  { label: '2016', value: 'Nextjs' },
  { label: '2017', value: 'react' },
  { label: '2018', value: 'remix' },
  { label: '2019', value: 'vite' },
  { label: '2020', value: 'nuxt' },
  { label: '2021', value: 'vue' },
  { label: '2022', value: 'svelte' },
  { label: '2023', value: 'angular' },
  { label: '2024', value: 'ember' },
  { label: '2025', value: 'gatsby' },
];

export function HeraComparativeAreaChart() {
    const [timeRange, setTimeRange] = React.useState("90d")
    const [value, setValue] = React.useState<Option[]>([
        OPTIONS.find(o => o.label === '2018')!
    ]);

    React.useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <Card className="flex flex-col pt-0 h-full">
            <CardHeader className="flex items-center justify-between gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle>Area Chart - Interactive</CardTitle>
                    <CardDescription>
                        Showing total visitors for the last 3 months
                    </CardDescription>
                </div>
                <HeraMultiSelect
                    className="w-[240px]"
                    value={value}
                    setValue={setValue}
                    options={OPTIONS}
                />
            </CardHeader>
            <CardContent className="sm:px-6 sm:pt-6 flex-1 min-h-0 p-0 h-full">
                <div className="h-full p-2 pt-0">
                    <ChartContainer
                        config={chartConfig}
                        className="aspect-auto h-full w-full"
                    >
                        <ResponsiveContainer>
                            <AreaChart data={data2018}>
                                <defs>
                                    <linearGradient id="fillConfig2018" x1="0" y1="0" x2="0" y2="1">
                                        <stop
                                            offset="5%"
                                            stopColor="var(--color-config2018)"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="var(--color-config2018)"
                                            stopOpacity={0.1}
                                        />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    minTickGap={32}
                                    tickFormatter={(value) => {
                                        const date = new Date(value)
                                        return date.toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                    }}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={
                                        <ChartTooltipContent
                                            labelFormatter={(value) => {
                                                return new Date(value).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                })
                                            }}
                                            indicator="dot"
                                        />
                                    }
                                />
                                <Area
                                    dataKey="value"
                                    type="natural"
                                    fill="url(#fillConfig2018)"
                                    stroke="var(--color-config2018)"
                                    stackId="a"
                                />
                                <ChartLegend content={<ChartLegendContent />} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card >
    )
}