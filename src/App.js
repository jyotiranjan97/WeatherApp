import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <h1 className="h1">Weather</h1>
      <SearchBar />
      <WeatherCard />
    </div>
  );
}

export default App;
