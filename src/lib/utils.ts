import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// types //
type GeolocationRes = {
  lat: number;
  lon: number;
};



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Get Current User GeoLocation
export const getUserLocation = ();
Promise<GeolocationRes> => {
  return new Promise((resolve, reject)=>{
    if(!navigator.geolocation){
      reject('Geolocation is not supported by your browser')
    }else{
      navigator.geolocation.getCurrentPosition
      // 1:44:17
    }
  })
}