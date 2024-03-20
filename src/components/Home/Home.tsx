import { FormEvent, useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import {
  GEOERRORS,
  LOCATION_FETCHING_ERROR,
  LOCATION_NOT_FOUND,
} from "../../constants";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/geo/1.0/direct";

const Home = () => {
  const [location, setLocation] = useState<string>("");
  const [locationError, setLocationError] = useState<string | null>(null);
  const [geolocationError, setGeolocationError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setGeolocationError(null);
    setLocationError(null);
    event.preventDefault();
    try {
      const response = await fetch(
        `${BASE_URL}?q=${location}&limit=1&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        navigate(`/details?lat=${lat}&lon=${lon}`);
      } else {
        setLocationError(LOCATION_NOT_FOUND);
      }
    } catch (error) {
      console.log(error);
      setLocationError(LOCATION_FETCHING_ERROR);
    }
  };

  const handleGetLocation = () => {
    setGeolocationError(null);
    setLocationError(null);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          navigate(
            `/details?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
        },
        (error) => {
          console.error(error);
          setGeolocationError(
            "Error fetching device location. Please try again."
          );
        }
      );
    } else {
      setGeolocationError(GEOERRORS.GEOLOCATION_UNSUPPORTED);
    }
  };

  return (
    <div className={styles.home}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="search"
          name="city"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Search for a city"
        />
      </form>
      {locationError && <p className={styles.error}>{locationError}</p>}
      <div className={styles.separator}></div>
      <button onClick={handleGetLocation} aria-label="Get device location">
        Get Device Location
      </button>
      {geolocationError && <p className={styles.error}>{geolocationError}</p>}
    </div>
  );
};

export default Home;
