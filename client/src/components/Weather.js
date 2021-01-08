import React, { Component } from "react";

class Weather extends Component {
  state = {
    city: "",
    temp: "",
    feelsLike: "",
    weatherIcon: "",
  };

  // Upon recieving weather data from App.js Component, render set the state for Weather properties to be rendered.
  componentWillReceiveProps = async (nextProps) => {
    await this.setState({ weather: nextProps.weather });
    if (this.state.weather.length === 0) {
      this.setState({ city: "", temp: "", feelsLike: "", weatherIcon: "" });
      return;
    }
    this.setState({
      city: this.state.weather.name,
      temp:
        "Currently: " + Math.trunc(this.state.weather.main.temp - 273.15 + 0.5),
      feelsLike:
        "Feels like: " +
        Math.trunc(this.state.weather.main.feels_like - 273.15 + 0.5),
    });
  };

  renderWeather = () => {
    return (
      <div>
        <p>
          {this.state.city}
          <br />
          {this.state.temp}
          <br />
          {this.state.feelsLike}
        </p>
      </div>
    );
  };

  render() {
    return <div>{this.renderWeather()}</div>;
  }
}

export default Weather;
