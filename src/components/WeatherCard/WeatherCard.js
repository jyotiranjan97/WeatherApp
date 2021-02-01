import React from "react";
import "./WeatherCard.css";
import WeatherDetails from "./WeatherDetails";

function WeatherCard(props) {
  return (
    <div className="weatherCard">
      <h1 className="city" name="city">
        {props.apiData.city}
      </h1>
      <h1>{props.apiData.temp}&deg;</h1>
      <p>feels like {props.apiData.feelsLike}&deg;</p>
      <div className="weatherReport">
        <span>
          <img
            src={`http://openweathermap.org/img/wn/${props.apiData.icon}@2x.png`}
            alt="Loading"
          />
        </span>
        <span>{props.apiData.weatherType}</span>
      </div>
      <WeatherDetails apiData={props.apiData} />
    </div>
  );
}

export default WeatherCard;
