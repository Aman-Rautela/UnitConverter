function converterLength(from, to, value){
    const units = {
        millimeter: 0.001,
        centimeter: 0.01,
        meter: 1,
        kilometer: 1000,
        inch: 0.0254,
        foot: 0.3048,
        yard: 0.9144,
        mile: 1609.34
  };
  if(units[!from] || !units[to]){
     throw new Error(`--------INVALID UNIT INPUT PROVIDED--------`); 
  }else{
    const result = (value * units[from]) / units[to];
    return result;
  }
}

function converterTemperature(from, to, value){
    from = from.toLowerCase();
    to = to.toLowerCase();
    const units = {
        celsius: {
            fahrenheit: (v) => (v * 9) / 5 + 32,
            kelvin: (v) => v + 273.15,
        },
        fahrenheit: {
            celsius: (v) => ((v - 32) * 5) / 9,
            kelvin: (v) => ((v - 32) * 5) / 9 + 273.15,
        },
        kelvin: {
            celsius: (v) => v - 273.15,
            fahrenheit: (v) => ((v - 273.15) * 9) / 5 + 32,
        },
    };
  if(units[!from] || !units[to]){
     throw new Error(`--------INVALID UNIT INPUT PROVIDED--------`); 
  }else{
    return units[from][to](value);
  }
}

function converterWeight(from, to, value){
   const units = {
        milligram: 1e-6,
        gram: 0.001,
        kilogram: 1,
        ounce: 0.0283495,
        pound: 0.453592
  };
  if(units[!from] || !units[to]){
     throw new Error(`--------INVALID UNIT INPUT PROVIDED--------`); 
  }else{
    const result = (value * units[from]) / units[to];
    return result;
  }
}
module.exports = {converterLength, converterTemperature, converterWeight};