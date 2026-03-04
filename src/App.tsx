/**Components**/ 
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopAppBar } from "@/components/TopAppBar";
import { WeatherProvider } from "@/components/WeatherProvider";
import { PageHeader } from "@/components/ui/PageHeader";
import { CurrentWeatherCard } from "@/components/CurrentWeatherCard";
import { Map } from "@/components/Map";
import { HourlyWeatherTabs } from "@/components/HourlyWeatherTabs";
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
          <HourlyWeatherTabs />
        </div>
      </main>

      <footer className="pb-5">
        <p className="text-center text-muted-foreground">
          &copy; 2026 <a href="https://www.sreenathselva.in/">Sreenathselva</a>
        </p>
      </footer>
      </WeatherProvider>
    </ThemeProvider>
  )
}
