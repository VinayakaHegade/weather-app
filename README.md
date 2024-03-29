# Weather App
[![Weather-app](https://img.shields.io/badge/Tryit-(here)-blue.svg)](https://v-weather.vercel.app)

This is an intuitive, user-friendly Weather App built with React. It integrates with the OpenWeather API to provide current weather details for any location.

Key features of the application include:

- **Location Input**: Users can input a location to get the current temperature, humidity, and other weather conditions.
- **Device Location**: The application can retrieve and display the weather details for the user's current device location.
- **Bookmarkable and Shareable**: The application adds the latitude and longitude to the query parameters of the URL, making the weather details page bookmarkable and shareable.
- **Weather Icons**: The application displays an appropriate weather icon based on the weather condition.

## Demo

https://github.com/VinayakaHegade/weather-app/assets/88454618/bb254123-86fa-475c-a8ce-88cee5d2a52c

Hom Page

![home](https://github.com/VinayakaHegade/weather-app/assets/88454618/bcf359cf-0767-41c0-9a50-e41b24044369)

Details Page

![details](https://github.com/VinayakaHegade/weather-app/assets/88454618/4273f675-90ea-40a3-916e-22c8f44aba78)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of `node` and `npm`.
* You have a OpenWeather API key. [How to get an API key](https://openweathermap.org/faq#:~:text=How%20to%20get%20an%20API%20key)

## Running the App

To run this app, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Create a `.env` file in the root of your project.
4. Add the following line to your `.env` file:

    ```
    VITE_OPEN_WEATHER_API_KEY = "YOUR-API-KEY-HERE";
    ```

    Replace `YOUR-API-KEY-HERE` with your actual OpenWeather API key.

5. Install the project dependencies by running:

    ```
    npm install
    ```

6. Start the development server by running:

    ```
    npm run dev
    ```

The application should now be running locally.
