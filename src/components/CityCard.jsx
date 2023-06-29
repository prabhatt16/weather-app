import axios from "axios";
import React, { useEffect, useState } from "react";
function CityCard({
  data,
  fetchWeatherDataByCity,
  fetchWeatherDataByLatLong,
  handleInputChange,
  city,
  errMessage
}) {
  return (
    <div>
      <h1 className=" text-blue-400 text-xl font-bold border-b px-3 py-1 border-b-gray-400 pb-2">
        Weather App
      </h1>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          className="border border-gray-400 mt-3 px-2 text-sm rounded-sm p-1"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <p className="text-red-600 text-xs ">{errMessage}</p>
        <button
          className="bg-blue-400 text-white text-sm m-3 px-8 py-1 rounded-sm"
          onClick={fetchWeatherDataByCity}
        >
          Get
        </button>
        <p className="text-gray-700 font-thin">or</p>
        <button
          className="bg-blue-400 text-white text-sm m-3 w-3/4 py-2 rounded-sm"
          onClick={()=>fetchWeatherDataByLatLong()}
        >
          Get Device Location
        </button>
      </div>
    </div>
  );
}

export default CityCard;
