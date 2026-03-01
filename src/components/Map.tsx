// node modules
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// custom modules
import { MAPBOX } from '@/config';

// Hooks
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { useWeather } from '@/hooks/useWeather';

// types
import { Map as MapType, type LngLatLike } from 'mapbox-gl';

export const Map = () => {
  // hooks
  const {theme} = useTheme();
  const {weather}=useWeather();

  // memos
  const center = useMemo<LngLatLike>(()=>weather ? [weather.location.lon, 
    weather.location.lat]: MAPBOX.DEFAULTS.CENTER, [weather]
  );

  // Refs
  const mapContainerRef = useRef<HTMLDivElement | null>
  (null);

  // States
  const [map, setMap] = useState<MapType |null>(null);

  // initial mapbox map
  useEffect(()=>{
    if(!mapContainerRef.current || !center) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    setMap(
      new mapboxgl.Map({
        container: mapContainerRef.current,
        center,
        zoom: MAPBOX.DEFAULTS.ZOOM,
        style: 'mapbox://styles/mapbox/standard',
        config: {
          basemap:{
            lightPreset: theme=== 'dark' ? 'day' : 'night',
          },
        },

      }),
    );
    return ()=> map?.remove();
  },[mapContainerRef,center]);

  return (
    <div ref={mapContainerRef}
     className="h-[300px] bg-card text-card-foreground
    shadow-sm overflow-hidden rounded-xl border">
       
    </div>
  )
}