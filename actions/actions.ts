'use server'

import { weatherType } from "@/types/weather";

export async function GetWeather(City: string)  {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${process.env.WEATHER_APP_KEY}`)
        const data = await res.json();
        return data;
    }
    catch(error){
        console.log('Err')
        console.log(error)
        return {}
    }
}