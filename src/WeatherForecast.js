import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="row">
              {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8440d16dc7b02d6a7589879556b1eead";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
