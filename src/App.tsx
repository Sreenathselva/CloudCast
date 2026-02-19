/**Components**/ 
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopAppBar } from "@/components/TopAppBar";
import { WeatherProvider } from "@/components/WeatherProvider";
import { PageHeader } from "@/components/ui/PageHeader";

export const App=()=>{
  return (
    <ThemeProvider>
      <WeatherProvider>
        
      <TopAppBar />
      <main className="py-4">
        <div className="container">
          {/**Page Header**/}
          <PageHeader />
        </div>
      </main>
      </WeatherProvider>
    </ThemeProvider>
  )
}
