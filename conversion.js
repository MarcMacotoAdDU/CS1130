function doConversion() {
    const inputValue = document.getElementById('inputValue');
    const conversionResult = document.getElementById('conversionResult');
    const conversionType = document.getElementById('conversionType').value;
  
    if (inputValue.value !== '') {
      const value = parseFloat(inputValue.value);
      let result;
  
      switch (conversionType) {
        case 'fahrenheitToCelsius':
          result = (value - 32) * (5 / 9);
          conversionResult.innerText = `Celsius: ${result.toFixed(2)}`;
          break;
        case 'celsiusToFahrenheit':
          result = (value * 9 / 5) + 32;
          conversionResult.innerText = `Fahrenheit: ${result.toFixed(2)}`;
          break;
        case 'feetToMeters':
          result = value * 0.3048;
          conversionResult.innerText = `Meters: ${result.toFixed(2)}`;
          break;
        case 'metersToFeet':
          result = value / 0.3048;
          conversionResult.innerText = `Feet: ${result.toFixed(2)}`;
          break;
        default:
          conversionResult.innerText = 'Invalid conversion type';
      }
    } else {
      conversionResult.innerText = 'Please enter a value';
    }
  }