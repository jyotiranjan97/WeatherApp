import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { API_KEY } from "../src/APIKey";
import Spinner from "./components/UI/Spinner";
import pic from "./images/sun.png";

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
        city: response.name + ", " + response.sys.country,
        temp: convertTemp(response.main.temp),
        feelsLike: convertTemp(response.main.feels_like),
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
  }, []);

  const getWeatherDetails = async (cityname) => {
    setDataReceived(false);
    const city_name = cityname === "" ? "London" : cityname;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setApiResData({
          city: responseData.name + ", " + responseData.sys.country,
          temp: convertTemp(responseData.main.temp),
          feelsLike: convertTemp(responseData.main.feels_like),
          minTemp: convertTemp(responseData.main.temp_min),
          maxTemp: convertTemp(responseData.main.temp_max),
          windSpeed: responseData.wind.speed,
          windDir: convertWindDirection(responseData.wind.deg),
          weatherType: responseData.weather[0].main,
          icon: responseData.weather[0].icon,
        });
        setDataReceived(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1 className="h1">
        Weather<img className="img" src={pic} alt=""></img>
      </h1>
      <div className="glass">
        <SearchBar loadWeather={(event) => getWeatherDetails(event)} />
        {dataReceived === true ? (
          <WeatherCard apiData={apiResData} />
        ) : (
          <div className="spinner">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
