// The forecast today is 293 Kelvin.
const kelvin =293; 

// Celsius is 273 degrees less than Kelvin
const celsius = kelvin -273;

// Calculating Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Result
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra calculation in Newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log('Newton is: ' + newton);
