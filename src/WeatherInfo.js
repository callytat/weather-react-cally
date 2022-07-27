import React from "react";
import FormattedDate from "./FormattedDate";

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
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <strong className="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units">°F</span>
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
