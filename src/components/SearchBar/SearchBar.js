import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [cityName, setCityName] = useState("");

  const onChangeHandler = (event) => {
    setCityName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.loadWeather(cityName);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="SearchBar">
        <input
          className="input"
          type="city"
          value={cityName}
          onChange={(event) => onChangeHandler(event)}
          placeholder="Enter the City"
        />
        <button className="button">
          <p style={{ color: "white", fontWeight: 650 }}>Search</p>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
