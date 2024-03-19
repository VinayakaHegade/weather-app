export const WEATHER_FETCHING_ERROR: string =
  "We're having trouble fetching the weather data. Please check your internet connection and try again.";
export const LOCATION_FETCHING_ERROR: string =
  "We're having trouble finding that location. Please ensure the location is spelled correctly and try again.";
export const LOCATION_NOT_FOUND: string =
  "We couldn't find that location. Please try entering a different city or town.";

export const GEOERRORS = {
  PERMISSION_DENIED:
    "We couldn't access your location because the permission was denied. Please check your settings and allow us to access your location.",
  POSITION_UNAVAILABLE:
    "We're having trouble determining your location. Please ensure you have a stable internet connection and try again.",
  TIMEOUT:
    "It took too long to get your location. Please check your internet connection and try again.",
  GEOLOCATION_UNSUPPORTED: "Geolocation is not supported by this browser.",
};
