import React from "react";
import "./WeatherCard.css";
import { WiDayCloudy } from "weather-icons-react";
import WeatherDetails from "./WeatherDetails";

function WeatherCard(props) {
  return (
    <div className="weatherCard">
      <h1 className="city">{props.apiData.city}</h1>
      <h1>{props.apiData.temp}&deg;</h1>
      <WiDayCloudy size={100} color="black" />
      <WeatherDetails apiData={props.apiData} />
    </div>
  );
}

export default WeatherCard;
