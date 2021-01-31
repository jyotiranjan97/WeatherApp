import React from "react";
import "./SearchBar.css";
import pic from "../../images/search.png";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input className="input" type="city" placeholder="Enter the City Name" />
      <img src={pic} alt="search" type="image/png" className="image" />
    </div>
  );
}

export default SearchBar;
