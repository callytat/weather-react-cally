import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    temperature: 82,
    date: "Friday 3:00PM",
    description: "clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 30,
    wind: 8,
  };

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
      <h3 className="description">{weatherData.description}</h3>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong className="temperature">{weatherData.temperature}</strong>
              <span className="units">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-conditions">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
