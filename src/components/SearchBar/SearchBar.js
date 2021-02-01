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
          placeholder="Enter the City Name"
        />
        <button className="button">
          <p>Search</p>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
