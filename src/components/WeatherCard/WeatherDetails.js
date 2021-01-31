import React from "react";
import "./WeatherDetails.css";

function WeatherDetails() {
  return (
    <div className="weather">
      <span className="span">
        <div>Wind</div>
        <div> NE 4.5 Km/hr</div>
      </span>
      <span className="span">
        <div>Min/Max</div>
        <div>24&deg;/26&deg;</div>
      </span>
    </div>
  );
}

export default WeatherDetails;
