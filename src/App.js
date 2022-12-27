import "./App.css";
import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";

function App() {
  const [long, setLong] = useState([]);
  const [lat, setLat] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("1", position.coords.latitude);
      console.log("1", position.coords.longitude);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    /**
     * for getting weather from pre-set location
     * fetch(`${process.env.REACT_APP_API_URL}/weather?q=new delhi,india&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
     */
    fetch(
      `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div>Error</div>
      )}
    </div>
  );
}

export default App;
