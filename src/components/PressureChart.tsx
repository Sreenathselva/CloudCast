
// hooks
import { useMemo } from "react";
import { useWeather } from "@/hooks/useWeather";

// components
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
// types
import type { ChartConfig } from "@/components/ui/chart";
import { AreaChartIcon } from "lucide-react";

// chart config

const chartConfig = {
  pressure: {
    label: 'Pressure',
    color: 'var(--pressure)',
  }
} satisfies ChartConfig;
export const PressureChart = () => {

  // Hooks
  const { weather } = useWeather();

  // Memos
  const chartData = useMemo(() => {
    return weather?.hourly.map((item) => ({
      hour: new Date(item.dt * 1000).toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true,
      }),
      pressure: item.pressure
    }));
  }, [weather]);

  if (!chartData) return <Skeleton className="h-[360px]" />

  return (
    <ChartContainer config={chartConfig}
      className="h-[360px] w-full overflow-hidden"
    >
      
      <AreaChart accessibilityLayer data={chartData}>
        
        <CartesianGrid strokeDasharray={4} />
        <XAxis dataKey='hour' tickLine={false}
          axisLine={false}
          tickCount={12}
          tickMargin={16} />

        <YAxis
          dataKey='pressure'
          tickLine={false}
          axisLine={false}
          tickCount={3}
          tickMargin={16}
        />

        <ChartTooltip cursor={false}
          content={<ChartTooltipContent />}
        />

        <defs>
          <linearGradient
            id="fillPressure" x1='0' y1='0'
            x2='0' y2='1'>
            <stop offset='0%'
              stopColor="var(--pressure)"
              stopOpacity={1}
            />
            
            <stop offset='100%'
              stopColor="var(--pressure)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <Area dataKey='pressure' type='natural'
          fill='url(#fillPressure)'
          fillOpacity={0.5}
          stroke='var(--color-Pressure)'
          strokeOpacity={0} />

        <ChartLegend content={<ChartLegendContent/>} />
      </AreaChart>
    </ChartContainer>
  )
}