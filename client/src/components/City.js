import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class City extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      weather: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Fetch the weather data using the property city
  fetchWeather = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=1d0c090ca206ea5b434cdfbced7aa471`
    );
    const weather = await response.json();
    this.setState({ weather: weather });
  };

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.fetchWeather();
    await this.props.onCityEntered(this.state.weather);
  };

  renderEnterCity = () => {
    // Error handle the form submission
    if (this.state.weather.cod === "404") {
      alert("Error: " + this.state.weather.message);
      this.setState({ weather: [] });
      return;
    } else {
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <p>
              <input
                type="text"
                value={this.state.city}
                placeholder="Vancouver.."
                name="city"
                onChange={this.handleChange}
              />
            </p>
            <p>
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </p>
          </Form>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Enter City</h2>
        {this.renderEnterCity()}
      </div>
    );
  }
}

export default City;
