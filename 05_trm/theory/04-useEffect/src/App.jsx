import { useEffect, useState } from "react";
import "./index.css";

const KEY = "8f25bdc1b5f949ea863131208251004";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not working in your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
      },
      (err) => {
        console.log("Geolocation error", err.message);
        setError("Failed to get your location");
      }
    );
  }, [city, coords]);

  useEffect(() => {
    if (!city.trim() && !coords) {
      setWeatherData(null);
      setError(null);
      return;
    }
    getData();
  }, [city]);
  async function getData() {
    setLoading(true);
    try {
      const query = city.trim()
        ? city
        : `${coords.latitude},${coords.longitude}`;
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${query}`
      );
      // используем, если API не возвращает ошибку самостоятельно
      /* if (!res.ok) {
          throw new Error(`Status:${res.status} Message:${res.statusText}`);
      } */
      const data = await res.json();
      // если API возвращает сообщение об ошибке
      if (data.error) {
        setError(data.error.message);
        setWeatherData(null);
        return;
      }
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }

  function renderError() {
    return <p>{error}</p>;
  }

  function renderLoading() {
    return <p>Loading...</p>;
  }

  function renderWeather() {
    return (
      <div className="weather-card">
        <h2>{`${weatherData?.location.name}, ${weatherData?.location.country}`}</h2>
        <img
          src={`https:${weatherData?.current?.condition?.icon}`}
          alt="icon"
          className="weather-icon"
        />
        <p className="temperature">
          {" "}
          {Math.round(weatherData?.current?.temp_c)}°C
        </p>
        <p className="condition"> {weatherData?.current?.condition?.text}</p>
        <div className="weather-details">
          <p>Humidity: {weatherData?.current?.humidity}%</p>
          <p>Wind: {weatherData?.current?.wind_kph} km/h</p>
        </div>
      </div>
    );
  }
  return (
    <div className="app">
      <div className="widget-container">
        <div className="weather-card-container">
          <h1 className="app-title">Weather Widget</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter city name"
              className="search-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        {error && renderError()}
        {loading && renderLoading()}
        {!loading && !error && weatherData && renderWeather()}
      </div>
    </div>
  );
}

export default App;
