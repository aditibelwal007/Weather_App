import React,{useState, useEffect} from 'react';
import Weathercard from './weathercard';
import './style.css';

const Temp = () => {
    const[searchValue, setSearchValue] = useState("pune");
    const [tempInfo, setTempInfo] =  useState({});

   const getWeatherInfo = async () => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=768cc5b7dd490e7eeebc8147cd67abb2`;

    const res = await fetch(url);
    const data = await res.json();

    console.log("API weather data:", data.weather); // <-- Debug here

    const { temp, humidity, pressure } = data.main;
    const weathermood = data?.weather?.[0]?.main || "Clear";
    const { name } = data;
    const { speed } = data.wind;
    const { country, sunset } = data.sys;

    const myNewWeatherInfo = {
      temp,
      humidity,
      pressure,
      weathermood,
      name,
      speed,
      country,
      sunset
    };

    setTempInfo(myNewWeatherInfo);
  } catch (error) {
    console.log("Fetch Error:", error);
  }
};

    useEffect(()=>{
        getWeatherInfo();
    }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search" placeholder="search..." autoFocus id="search"
           className="searchTerm"
            value={searchValue} 
            onChange={(e)=>setSearchValue(e.target.value)}/>
          <button className="searchButton" onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
      <Weathercard tempInfo={tempInfo}/>

      
    </>
  );
};

export default Temp;
