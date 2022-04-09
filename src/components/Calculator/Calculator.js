import React, { Component } from "react";
// import { BoilingVeredict } from '../BoilingVeredict'
import BoilingVeredict from '../BoilingVeredict'
import TemperatureInput from './TemperatureInput'

class Calculator extends Component {

  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this)
    this.state = { temperature: '', scale: 'c' }
  }

  //this.setState({ temperature: event.target.value })
  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature })
  }

  handleFarenheitChange(temperature) {
    this.setState({ scale: 'f', temperature })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const farenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    // console.log("temperature" + temperature)
    return (

      <div>
        <label>Calculator</label>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={farenheit} onTemperatureChange={this.handleFarenheitChange} />
        <BoilingVeredict celsius={parseFloat(celsius)} />
      </div>)
  }
}


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

export default Calculator;
