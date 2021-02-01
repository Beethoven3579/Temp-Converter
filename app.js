// creating variables so I don't have to use document.Get over and over!

const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');


//parseFLoat() is uded here because javascript reconizes cTemp as a string
//therefore, it converts 273.15 to a string and concatinates. parseFloat()
//converts celsiusTemp to an floating integer    

function roundDown(num) {
    return Math.round(num * 100) / 100;
}

function celsiusToFahrenheitAndKelvin() {
    const celsiusTemp = parseFloat(celsiusInput.value);
    const fahrenheitTemp = (celsiusTemp * (9 / 5)) + 32;
    const kelvinTemp = celsiusTemp + 273.15;
    fahrenheitInput.value = roundDown(fahrenheitTemp);
    kelvinInput.value = roundDown(kelvinTemp);
}

function fahrenheitToCelsiusAndKelvin() {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
    const kelvinTemp = (fahrenheitTemp + 459.67) * 5 / 9;
    celsiusInput.value = roundDown(celsiusTemp);
    kelvinInput.value = roundDown(kelvinTemp);
}

function kelvinToCelsiusAndFahrenheit() {
    const kelvinTemp = parseFloat(kelvinInput.value);
    const celsiusTemp = kelvinTemp - 273.15;
    const fahrenheitTemp = 9 / 5 * (kelvinTemp - 273) + 32;
    celsiusInput.value = roundDown(celsiusTemp);
    fahrenheitInput.value = roundDown(fahrenheitTemp);
}

function main() {
    celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);
}
main();
