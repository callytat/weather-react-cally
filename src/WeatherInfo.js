import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        Last updated: <FormattedDate date={props.data.date} />
      </h1>
      <h2>{props.data.city}</h2>
      <h3 className="text-capitalize">{props.data.description}</h3>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <WeatherIcon code={props.data.iconUrl} size={64} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul className="weather-conditions">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
