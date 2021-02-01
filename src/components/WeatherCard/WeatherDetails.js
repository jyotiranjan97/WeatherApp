import React from "react";
import "./WeatherDetails.css";

function WeatherDetails(props) {
  return (
    <div className="weather">
      <span className="span">
        <div>Wind Speed</div>
        <div>
          {" "}
          {props.apiData.windDir} {props.apiData.windSpeed} Km/hr
        </div>
      </span>
      <span className="span">
        <div>Min/Max Temp</div>
        <div>
          {props.apiData.minTemp}&deg;/{props.apiData.maxTemp}&deg;
        </div>
      </span>
    </div>
  );
}

export default WeatherDetails;
