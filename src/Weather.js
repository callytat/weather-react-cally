import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 2:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="container">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter city name"
                autofocus="on"
                className="search-text-input"
              />
            </div>

            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>

            <div className="col-2">
              <input
                type="submit"
                value="Current Location"
                className="btn btn-success current-location-button w-100"
              />
            </div>
          </div>
        </form>

        <h1>Last updated: {weatherData.date}</h1>
        <h2>{weatherData.city}</h2>
        <h3 className="text-capitalize">{weatherData.description}</h3>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong className="temperature">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span className="units">°F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="weather-conditions">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8440d16dc7b02d6a7589879556b1eead";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
