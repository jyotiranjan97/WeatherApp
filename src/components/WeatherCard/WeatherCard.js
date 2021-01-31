import React from "react";
import "./WeatherCard.css";
import { WiDayCloudy } from "weather-icons-react";
import WeatherDetails from "./WeatherDetails";

function WeatherCard() {
  return (
    <div className="weatherCard">
      <h1 className="city">Dhenkanal</h1>
      <h1>25&deg;</h1>
      <WiDayCloudy size={100} color="black" />
      <WeatherDetails />
    </div>
  );
}

export default WeatherCard;
