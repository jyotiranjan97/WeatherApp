import React from "react";
import "./WeatherDetails.css";

function WeatherDetails(props) {
  return (
    <div className="weather">
      <span className="span">
        <h4>Wind Speed</h4>
        <div>
          {props.apiData.windDir} {props.apiData.windSpeed} Km/hr
        </div>
      </span>
      <span className="span">
        <h4>Min/Max Temp</h4>
        <div>
          {props.apiData.minTemp}&deg;/{props.apiData.maxTemp}&deg;
        </div>
      </span>
    </div>
  );
}

export default WeatherDetails;
