function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

    var temperaturaCelsius = 36;
    var temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);

    console.log(temperaturaCelsius + " grados Celsius son " + temperaturaFahrenheit + " grados Fahrenheit.");

