"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart, ResponsiveContainer } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/src/components/ui/chart"

export const description = "A donut chart"

const chartData = [
    { browser: "Bruno", visitors: 275, fill: "pink" },
    { browser: "Jovem", visitors: 200, fill: "blue" },
    { browser: "Humberto", visitors: 187, fill: "green" },
    { browser: "Wesley", visitors: 173, fill: "yellow" },
    { browser: "Fabio", visitors: 90, fill: "red" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    bruno: {
        label: "Bruno",
        color: "var(--chart-1)",
    },
    jovem: {
        label: "Jovem",
        color: "var(--chart-2)",
    },
    humberto: {
        label: "Humberto",
        color: "var(--chart-3)",
    },
    wesley: {
        label: "Wesley",
        color: "var(--chart-4)",
    },
    fabio: {
        label: "Fabio",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig

export function HeraPieChart() {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader className="shrink-0">
                <CardTitle>Gráfico de rosquinha</CardTitle>
                <CardDescription>ESPECIALIDADE do Wesley</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 min-h-0 p-0 h-full">
                <div className="h-full p-2 pt-0">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[200px]"
                    >
                        <ResponsiveContainer>
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartData}
                                    dataKey="visitors"
                                    nameKey="browser"
                                    innerRadius={60}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
