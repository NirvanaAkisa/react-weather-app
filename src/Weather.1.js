import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
}


  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Pretoria</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Partly cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Precipitation:6%</li>
              <li>Humidity:72%</li>
              <li>Wind:13km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
     const apiKey = "1266ad07b66517497b1acf79ea5a6a64";
     let city = "Pretoria";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return "Loading. . .";
 
  }
    
    
}
