


// custom modules
import { weatherProviderContext } from "@/components/WeatherProvider";

// Hooks //
import { useContext } from "react";

export const useWeather =()=>{
    const context = useContext(weatherProviderContext);

    if(context === undefined){
        throw new Error('useWeather must be used within a WeatherProvider');

    }

    return context;
}