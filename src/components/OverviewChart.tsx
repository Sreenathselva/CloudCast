
// hooks
import { useMemo } from "react";
import { useWeather } from "@/hooks/useWeather";

// components
import {Area, AreaChart, CartesianGrid, XAxis,YAxis} from "recharts";
import {ChartContainer, ChartTooltip,ChartTooltipContent, ChartLegend, ChartLegendContent} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
// types
import type { ChartConfig } from "@/components/ui/chart";

// chart config

const chartConfig = {
    temp:{
        label: 'Temperature',
        color: 'var(--chart-1)',
    },
    feels:{
        label: 'Feels like',
        color: 'var(--muted-foreground)'
    },
} satisfies ChartConfig;
export const OverviewChart = () => {
  return (
    <div>
      overview-cahart
    </div>
  )
}