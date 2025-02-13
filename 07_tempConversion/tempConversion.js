const convertToCelsius = function(fahrTemp) {
  const celsTemp = (fahrTemp - 32) * 5/9;
  const rounded = Math.round(celsTemp * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celsTemp) {
  const fahrTemp = (celsTemp * 9/5) + 32;
  const rounded = Math.round(fahrTemp * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
