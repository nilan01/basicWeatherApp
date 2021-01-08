import React, { Component } from "react";

class WeatherIcon extends Component {
  state = {
    weatherIconUrl: "",
  };

  // Upon recieving the weatherIcon prop, set state for the image url
  componentWillReceiveProps = async (nextProps) => {
    await this.setState({ weatherIconUrl: nextProps.weatherIcon });
    console.log(nextProps.weatherIcon);
    if (nextProps.weatherIcon.length === 0) {
      this.setState({ weatherIconUrl: "" });
      return;
    } else {
      this.setState({
        weatherIconUrl: `http://openweathermap.org/img/wn/${this.state.weatherIconUrl.weather[0].icon}@2x.png`,
      });
    }
  };

  renderWeatherIcon = () => {
    return (
      <div>
        <img src={this.state.weatherIconUrl} alt=""></img>
      </div>
    );
  };

  render() {
    return <div>{this.renderWeatherIcon()}</div>;
  }
}

export default WeatherIcon;
