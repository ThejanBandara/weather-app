"use client"

import { GetWeather } from '@/actions/actions'
import CurrentDate from '@/components/CurrentDate'
import SubmitBtn from '@/components/SubmitBtn'
import { Input } from '@/components/ui/input'
import { weatherType } from '@/types/weather'
import { Cloud, Wind, X } from 'lucide-react'
import React, { useState } from 'react'

export default function Home() {

  const [weatherData, setWeatherData] = useState<weatherType | null>(null);
  const [isSearched, setIsSearched] = useState(false);
  const [isError, setIsError] = useState(false);

  const HandleSubmit = async (formData: FormData) => {
    const City = formData.get('city') as string;
    const data = await GetWeather(City);
    if (data === null) {
      setIsError(true);
    }
    else {
      setWeatherData(data);
      setIsSearched(true);
      setIsError(false);
    }
  }

  return (
    <div className={` flex items-center ${isSearched ? 'justify-start' : 'justify-center'} flex-col gap-2 py-4 w-full h-full `}>
      <form action={HandleSubmit} className='flex flex-row items-center justify-center gap-4 w-full'>
        <Input name='city' type='text' placeholder='Search city' className='w-2/3 text-white/80 placeholder:text-white/50 border-white/50 border-1' required ></Input>
        <SubmitBtn />
      </form>
      {weatherData && (

        <div className='w-full h-full flex flex-col items-center p-4 relative'>
          <p className='text-white text-2xl text-pretty '>{weatherData?.name}</p>
          <p className='text-white/70 text-lg'><CurrentDate /></p>
          <img className='h-4/12 -m-2' src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`} />
          <p className='text-white text-4xl font-bold py-2'>{weatherData?.main.temp}°</p>
          <p className='text-white/70'>{weatherData?.weather[0].description}</p>
          <div className='w-full flex flex-row items-center justify-evenly my-4'>
            <div className='flex flex-col items-center '>
              <Wind className='text-gray-400 size-7' />
              <p className='text-white/70'>{weatherData?.wind.speed} km/h</p>
            </div>
            <div className='flex flex-col items-center text-white'>
              <Cloud className='text-gray-400 size-7' />
              <p className='text-white/70'>{weatherData?.main.humidity}%</p>
            </div>
          </div>
          <button className='absolute top-3 right-3 size-7 rounded-full text-white/70' onClick={() => { setIsSearched(false) }}><X /></button>
        </div>
      )
      }
      {
        isError && (
          <div> 
            error
          </div>
        )
      }

    </div>
  );
}
