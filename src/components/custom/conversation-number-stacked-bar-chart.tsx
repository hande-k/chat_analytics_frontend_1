"use client";
import { YAxis } from "recharts";
import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts";
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StackedBarChartProps {
  chartData: {
    date: string;
    chats_with_messages_count: number;
    chats_without_messages_count: number;
  }[];
}
export function StackedBarChartComponent({ chartData }: StackedBarChartProps) {
  const [timeRange, setTimeRange] = React.useState("90d");
  console.log(chartData);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });
  console.log(filteredData);
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
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
    <Card className="h-full">
      <CardHeader className="h-1/4 flex items-center gap-2 space-y-0 border-b sm:flex-row lg:py-12 xl:py-10">
        <div className="grid flex-1 gap-2 text-center sm:text-left">
          <CardTitle>{"Conversations"}</CardTitle>
          <CardDescription>
            {"Select the desired time horizon on the right."}
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[120px] rounded-lg sm:ml-auto"
            aria-label={"Select time horizon"}
          >
            <SelectValue placeholder={"3 Months"} />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              {"3 Months"}
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              {"30 Days"}
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              {"7 Days"}
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="h-3/4 px-2 pt-4 sm:px-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto min-h-[100px] h-full w-full py-2"
        >
          <BarChart accessibilityLayer data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis
              axisLine={false}
              hide={true}
              padding={{ top: 20, bottom: 0 }}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Bar
              dataKey="chats_without_messages_count"
              stackId="a"
              fill="hsl(var(--chart-1))"
              radius={[0, 0, 2, 2]}
            ></Bar>

            <Bar
              dataKey="chats_with_messages_count"
              stackId="a"
              fill="hsl(var(--chart-2))"
              radius={[2, 2, 0, 0]}
            >
              <LabelList
                position="top"
                offset={4}
                className="fill-foreground"
                fontSize={12}
                formatter={(value) => (value > 0 ? value : "")}
              ></LabelList>
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
