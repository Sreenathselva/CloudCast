import axios from 'axios';

export const openWeatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org/',
    params: {
        appid: "237887995de25ca4ad3f002b96a7f22b",
    },
})