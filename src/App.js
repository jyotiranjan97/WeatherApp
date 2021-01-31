import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { API_KEY } from "../src/APIKey";

function App() {
  const [apiResData, setApiResData] = useState({});
  const [dataReceived, setDataReceived] = useState(false);

  const convertTemp = (temp) => {
    return Math.floor(temp - 273.15);
  };

  const convertWindDirection = (deg) => {
    if (deg === 0 || deg === 360) return "N";
    else if (deg < 90 && deg > 0) return "NE";
    else if (deg === 90) return "E";
    else if (deg > 90 && deg < 180) return "SE";
    else if (deg === 180) return "S";
    else if (deg > 180 && deg < 270) return "SW";
    else if (deg === 270) return "W";
    else return "NW";
  };

  useEffect(() => {
    const getApiData = async () => {
      const apiData = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
      );
      const response = await apiData.json();
      console.log(response);
      setApiResData({
        city: response.name,
        temp: convertTemp(response.main.temp),
        minTemp: convertTemp(response.main.temp_min),
        maxTemp: convertTemp(response.main.temp_max),
        windSpeed: response.wind.speed,
        windDir: convertWindDirection(response.wind.deg),
        weatherType: response.weather[0].main,
        icon: response.weather[0].icon,
      });
      setDataReceived(true);
    };
    getApiData();
    console.log(apiResData.icon);
  }, []);

  return (
    <div className="App">
      <h1 className="h1">Weather</h1>
      <SearchBar />
      {dataReceived === true ? <WeatherCard apiData={apiResData} /> : "Loading"}
    </div>
  );
}

export default App;
