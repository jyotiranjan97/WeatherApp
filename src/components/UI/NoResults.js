import React from "react";
import "./NoResults.css";
import pic from "../../images/no data.svg";

function NoResults() {
  return (
    <div className="noResult">
      <p className="note">No Results for this Location</p>
      <img src={pic} alt="No Result" className="image" />
    </div>
  );
}

export default NoResults;
