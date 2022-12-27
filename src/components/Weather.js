import React from "react";
import moment from "moment";
import { FaSearch } from "react-icons/fa";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <>
      <div className="weather-container">
        <div className="current-day-weather">
          <div className="container">
            <div className="day-time">
              <p className="date">
                {" "}
                {moment().format("dddd")}, <span>{moment().format("LL")}</span>
              </p>
              <p className="time"> {moment().calendar()} </p>
            </div>
            <div className="top">
              <span className="search-icon">
                <FaSearch />
              </span>
              <h4 className="city">{weatherData.name}</h4>
              <h4 className="weather-condition">
                It's {weatherData.weather[0].main}
              </h4>
            </div>
            <div className="main">
              <h1 className="temperature">
                {weatherData.main.temp}
                <sup style={{ fontSize: "30px" }}>&#8451;</sup>
              </h1>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind: {Math.floor(weatherData.wind.speed * 3.6)} km/h</p>
            </div>
            <div className="bottom">
              <div className="sunrise">
                <p>SUNRISE</p>
                <p>
                  {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                    "en-IN"
                  )}
                </p>
              </div>
              <div className="divide"></div>
              <div className="sunset">
                <p>SUNSET</p>
                <p>
                  {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                    "en-IN"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
