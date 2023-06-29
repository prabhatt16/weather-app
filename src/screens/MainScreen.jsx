import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import sun from "../assets/sun.png";
import humidity from "../assets/humidity.png";
import hot from "../assets/hot.png";
import CityCard from "../components/CityCard";
import WeatherCard from "../components/WeatherCard";
function MainScreen() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLat(latitude);
        setLong(longitude);
      });
    }
  }, [lat, long]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setErr('')
  };

  const isWeatherCardOpen = () => {
    setIsWeatherOpen(!isWeatherOpen);
  };

  const fetchWeatherDataByLatLong = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLat(latitude);
        setLong(longitude);
      });
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3caaf465acdf0b8c9ce51991f527b649`
      )
      .then((response) => {
        setWeatherData(response.data);
        setIsWeatherOpen(!isWeatherOpen);
        setCity('');
      })
      .catch((error) => {
        setErr(error.response.data.message);
      });
  };
  const fetchWeatherDataByCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3caaf465acdf0b8c9ce51991f527b649`
      )
      .then((response) => {
        setWeatherData(response.data);
        setIsWeatherOpen(!isWeatherOpen);
        setCity('');
      })
      .catch((error) => {
        setErr(error.response.data.message);
      });
  };
  return (
    <div className="bg-white rounded-md sm:w-3/12 w-3/4">
      {!isWeatherOpen ? (
        <CityCard
          errMessage={err}
          handleInputChange={handleInputChange}
          fetchWeatherDataByCity={fetchWeatherDataByCity}
          fetchWeatherDataByLatLong={fetchWeatherDataByLatLong}
          city={city}
          data={weatherData}
        />
      ) : (
        <WeatherCard
          weatherData={weatherData}
          isWeatherCardOpen={isWeatherCardOpen}
        />
      )}
    </div>
  );
}

export default MainScreen;
