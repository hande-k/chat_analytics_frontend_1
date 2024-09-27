"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface RadialChartProps {
  chartData: { chat_with_message: number; chat_without_message: number }[];
}
export function RadialChartComponent({ chartData }: RadialChartProps) {
  const totalSessions =
    chartData[0].chat_with_message + chartData[0].chat_without_message;
  const bounce_rate = chartData[0].chat_without_message / totalSessions;
  const formattedBounceRate = (bounce_rate * 100).toFixed(1) + "%";

  const chartConfig = {
    chat_with_message: {
      label: "chat_with_message",
      color: "hsl(var(--chart-2))",
    },
    chat_without_message: {
      label: "chat_without_message",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-full ">
      <CardHeader className="h-1/4 items-center border-b sm:flex-row lg:py-12 xl:py-10">
        <div className="grid flex-1 gap-2 text-center sm:text-left">
          <CardTitle>{"Bounce Rate"}</CardTitle>
          <CardDescription>
          {`The bounce rate is ${formattedBounceRate}`}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="h-full flex flex-row items-center mt-2">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-auto min-h-[100px] w-full h-full"
        >
          <RadialBarChart
            className=""
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalSessions.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          {"Conversations"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="chat_with_message"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-chat_with_message)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="chat_without_message"
              fill="var(--color-chat_without_message)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
