const convertToCelsius = function(Fahrenheit) {
  Celcius = (Fahrenheit - 32) * 5/9
  return Math.round(Celcius * 10) / 10
};

const convertToFahrenheit = function(Celcius) {
  Fahrenheit = (Celcius * 9/5 + 32)
  return Math.round(Fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
