/**Components**/ 
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopAppBar } from "@/components/TopAppBar";
import { WeatherProvider } from "@/components/WeatherProvider";
import { PageHeader } from "@/components/ui/PageHeader";
import { CurrentWeatherCard } from "@/components/CurrentWeatherCard";
import { Map } from "@/components/Map";
export const App=()=>{
  return (
    <ThemeProvider>
      <WeatherProvider>
        
      <TopAppBar />
      <main className="py-4">
        <div className="container">
          {/**Page Header**/}
          <PageHeader />
          {/* Current Weather card & map */}
          <div className="grid grid-cols-1 gap-2 
          lg:grid-cols-2">
            <CurrentWeatherCard />
            <Map />
          </div>
          
        </div>
      </main>
      </WeatherProvider>
    </ThemeProvider>
  )
}
