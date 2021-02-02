import React from "react";
import "./WeatherCard.css";
import WeatherDetails from "./WeatherDetails";

function WeatherCard(props) {
  return (
    <div className="weatherCard">
      <h1 className="city" name="city">
        {props.apiData.city}
      </h1>
      <div className="tempDetail">
        <span>
          <h1>{props.apiData.temp}&deg;</h1>
        </span>
        <span>
          <p style={{ marginTop: 32 }}>
            / feels like {props.apiData.feelsLike}&deg;
          </p>
        </span>
      </div>
      <div className="weatherReport">
        <span>
          <img
            src={`http://openweathermap.org/img/wn/${props.apiData.icon}@2x.png`}
            alt="Loading"
          />
        </span>
        <span>
          <h4>{props.apiData.weatherType}</h4>
        </span>
      </div>
      <WeatherDetails apiData={props.apiData} />
    </div>
  );
}

export default WeatherCard;
