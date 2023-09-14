import { ModuleUnitConvert } from "../../modules/Agregator.js";

const { celsiusToFahrenheit, fahrenheitToCelsius } = ModuleUnitConvert;

function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById('input-temperature').value);
  const inputUnit = document.getElementById('input-unit').value;
  const outputUnit = document.getElementById('output-unit').value;
  let result;

  if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
    result = celsiusToFahrenheit(inputTemperature);
  } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
    result = fahrenheitToCelsius(inputTemperature);
  } else {
    result = inputTemperature;
  }

  document.getElementById('result').textContent = result.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
  const convertButton = document.getElementById('convert-button');
  convertButton.addEventListener('click', convertTemperature);
});