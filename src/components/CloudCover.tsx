
// hooks
import { useMemo } from "react";
import { useWeather } from "@/hooks/useWeather";

// components
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
// types
import type { ChartConfig } from "@/components/ui/chart";
import { AreaChartIcon } from "lucide-react";

// chart config

const chartConfig = {
  clouds: {
    label: 'Cloud cover',
    color: 'var(--clouds)',
  }
} satisfies ChartConfig;



export const CloudCover = () => {
  // Hooks
  const { weather } = useWeather();

  // Memos
  const chartData = useMemo(() => {
    return weather?.hourly.map((item) => ({
      hour: new Date(item.dt * 1000).toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true,
      }),
      clouds: item.clouds,
      
    }));
  }, [weather]);

  if (!chartData) return <Skeleton className="h-[360px]" />

  return (
    <ChartContainer config={chartConfig}
      className="h-[360px] w-full"
    >
      <BarChart accessibilityLayer
       data={chartData}
       barSize={20}
       barCategoryGap={0}>
        <CartesianGrid strokeDasharray={4} />
        <XAxis dataKey='hour' tickLine={false}
          axisLine={false}
          tickCount={12}
          tickMargin={16} />

        <YAxis
          dataKey='clouds'
          tickLine={false}
          axisLine={false}
          tickMargin={16}
        />

        <ChartTooltip cursor={false}
          content={<ChartTooltipContent />}
        />


        <Bar dataKey='clouds' type='natural'
          fill='var(--color-clouds))'
          stroke='var(--color-clouds)'
          radius={[100,100,0,0]} />

        <ChartLegend content={<ChartLegendContent/>} />
      </BarChart>
    </ChartContainer>
  )
}