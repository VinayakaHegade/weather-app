import { useLocation } from "react-router-dom";
import styles from "./WeatherDetails.module.css";
import { useEffect, useState } from "react";
import { WEATHER_FETCHING_ERROR } from "../../constants";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const WeatherDetails = () => {
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get("lat");
  const lon = params.get("lon");

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        if (response.ok) {
          setWeatherData(data);
        } else {
          setError(WEATHER_FETCHING_ERROR);
        }
      } catch (error) {
        console.error(error);
        setError(WEATHER_FETCHING_ERROR);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (isLoading) {
    return <div className={styles.main}>Loading...</div>;
  }

  if (error) {
    return (
      <div className={styles.main}>
        <p className={styles.error}>{error}</p>
      </div>
    );
  }

  if (weatherData) {
    const { weather, main, name, sys } = weatherData;
    const { icon, description } = weather[0];
    const { temp, feels_like, humidity } = main;
    const { country } = sys;
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const fullCountryName = regionNames.of(country);

    return (
      <div className={styles.details}>
        <section className={styles.main}>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={`Icon representing ${description}`}
          />
          <h1 className={styles.temp}>{temp}°C</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.location}>
            <img
              className={styles.locationIcon}
              src="/assets/location.svg"
              alt="location icon"
            />
            <p>
              {name}, {fullCountryName}
            </p>
          </div>
        </section>
        <section className={styles.footer}>
          <div className={styles.container}>
            <img
              className={styles.icon}
              src="/assets/temperature.svg"
              alt="temperatue icon"
            />
            <div>
              <h4>{feels_like}°C</h4>
              <p className={styles.label}>Feels like</p>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.container}>
            <img
              className={styles.icon}
              src="/assets/humidity.svg"
              alt="humidity icon"
            />
            <div>
              <h4>{humidity}%</h4>
              <p className={styles.label}>Humidity</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null;
};

export default WeatherDetails;
