
//  custom modules //
import { APP } from "@/config";


// hooks //
import { useWeather } from "@/hooks/useWeather";

// components //
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// assets //
import { LocateFixedIcon } from "lucide-react";


export const PageHeader = ()=>{
const {weather, setWeather} = useWeather();

if(!weather) return <Skeleton className="w-40 h-4 mt-2 mb-6" />


    return (
        <div className="flex item-center gap-4 mb-4">
            <h2>
                {weather.location.name},
                {weather.location.state ? weather.location.state + ',' : ''}
                {weather.location.country}
            </h2>
        </div>        
    )
}