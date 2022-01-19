import React, { Component } from "react";
// import { BoilingVeredict } from '../BoilingVeredict'
import BoilingVeredict from '../BoilingVeredict'
import TemperatureInput from './TemperatureInput'

class Calculator extends Component {

  constructor(props) {
    super(props)
  }

  //this.setState({ temperature: event.target.value })

  render() {
    const celsius = scale === 'f' ? tryCon
    // console.log("temperature" + temperature)
    return (

      <div>
        <label>Calculator</label>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={ } />
        <TemperatureInput scale="f" />
      </div>)
  }
}


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, converter) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

export default Calculator;
