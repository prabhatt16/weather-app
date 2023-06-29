import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import sun from "../assets/sun.png";
import raining from "../assets/raining.png";
import cloudy from "../assets/cloudy.png";
import humidity from "../assets/humidity.png";
import hot from "../assets/hot.png";

function WeatherCard({weatherData,isWeatherCardOpen,}) {
  return (
    weatherData && <div className="flex flex-col justify-center item-center self-center m-auto ">
      <div className="flex flex-row justify-start py-3 w-full items-center border-b border-b-gray-400 px-2">
        <FaArrowLeft
          onClick={isWeatherCardOpen}
          color="#64b5f6"
          size={16}
        />
        <h1 className=" text-blue-400 ml-2 text-sm font-bold ">Weather App</h1>
      </div>
      <div className="">
        <img src={weatherData?.weather[0]?.main==='Clear'?sun:weatherData?.weather[0]?.main==='Rain'?raining:cloudy} alt="weatherimage" className="py-3 h-28 m-auto p-2" />
        <h1 className="text-center text-black text-3xl font-bold ">
          {Math.trunc(weatherData?.main?.temp / 10)}°C
        </h1>
        <p className="text-center text-black text-sm font-semibold pt-1">
          {weatherData?.weather[0]?.description}
        </p>
        <div className="flex flex-row justify-center items-center m-auto pb-4">
          <CiLocationOn color="black" size={12} />
          <p className="text-center text-black text-sm font-thin ml-1 ">
            {`${weatherData?.name}, ${weatherData?.sys?.country}`}
          </p>
        </div>
        <div className="flex flex-row justify-between  w-full items-center border-t border-t-gray-400 px-2">
          <div className="flex flex-row justify-center items-center w-1/2 py-1">
            <img src={hot} alt="weatherimage" className=" w-8 p-1" />
            <div className="">
              <h1 className="text-center text-black text-sm font-semibold ">
                {Math.trunc(weatherData?.main?.feels_like / 10)}°C
              </h1>
              <p className="text-center text-black text-xs font-thin ">
                Feels like
              </p>
            </div>
          </div>
          <div className=" h-12 border-r border-r-gray-400"></div>
          <div className="flex flex-row justify-center items-center w-1/2 py-1">
            <img src={humidity} alt="weatherimage" className=" w-8 p-1" />
            <div className="">
              <h1 className="text-center text-black text-sm font-semibold ">
                {weatherData?.main?.humidity}%
              </h1>
              <p className="text-center text-black text-xs font-thin">
                Humidity
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
