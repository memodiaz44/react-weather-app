import { useState } from 'react'
import axios from "axios";
import './search.css' 




const Search = () => {
    const [weather, setWeather] = useState(null);
    const [query, setQuery] = useState("");
  
    const ket = process.env.REACT_APP_API_KEY
  
    const getWeather = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${ket}&units=metric`
        ); 
        setWeather(response.data);
        setQuery("");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={getWeather}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter city name"
            required
          />
          <button className='button' type="submit">Get Weather</button>
        </form>
        {weather && (
          <div>
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Feels like: {weather.main.feels_like}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    );
  }
export default Search