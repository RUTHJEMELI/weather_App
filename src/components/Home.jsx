import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../service/api';
import { TiWeatherPartlySunny } from "react-icons/ti";

const Home = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported in your browser');
    }
  }, []);

  useEffect(() => {
    // Check if location is available before making the API call
    if (location) {
      getCurrentWeather(location.latitude, location.longitude)
        .then((weatherCondition) => {
          console.log(weatherCondition);
          // Handle the weather data as needed
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [location]);
    console.log(location)

    return (
        <div className='text-black  w-full '>
            <div className='flex flex-col  justify-center items-center mt-36 '>
            <TiWeatherPartlySunny style={{size:'20px'}}/>
            <h3>Nairobi, kenya</h3>
            </div>
        </div>
    )
};

export default Home;
