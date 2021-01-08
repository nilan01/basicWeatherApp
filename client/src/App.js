import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./components/Weather";
import City from "./components/City";
import WeatherIcon from "./components/WeatherIcon";
import Navigation from "./components/Navigation";
class App extends Component {
  state = { weather: [], weatherIcon: "" };

  onCityEntered = (weather) => {
    if (weather.cod === "404") {
    } else {
      this.setState({ weather: weather });
    }
  };

  onWeatherDisplayed = (weatherIcon) => {
    this.setState({ weatherIcon: weatherIcon });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <WeatherIcon weatherIcon={this.state.weather} />
        <Weather
          weather={this.state.weather}
          onWeatherDisplayed={this.onWeatherDisplayed}
        />
        <City onCityEntered={this.onCityEntered} />
      </div>
    );
  }
}

export default App;
