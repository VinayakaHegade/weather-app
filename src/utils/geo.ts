import { GEOERRORS } from "../constants";

export function getGeolocationErrorMessage(
  error: GeolocationPositionError
): string {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return GEOERRORS.PERMISSION_DENIED;
    case error.POSITION_UNAVAILABLE:
      return GEOERRORS.POSITION_UNAVAILABLE;
    case error.TIMEOUT:
      return GEOERRORS.TIMEOUT;
    default:
      return "An unknown error occurred.";
  }
}
