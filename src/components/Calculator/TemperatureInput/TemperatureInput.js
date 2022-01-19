import React, { Component } from "react";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {

  constructor(props) {
    super(props)
    this.state = { temperature: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <div>TemperatureInput
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}</legend>
          <input type="number" value={temperature} onChange={this.handleChange} />


          {/* <BoilingVeredict celcius={parseFloat(temperature)} /> */}
        </fieldset>
      </div>

    );
  }
}



export default TemperatureInput;
