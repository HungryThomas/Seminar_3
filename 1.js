// Необходимо пользователя попросить ввести температуру в градусах Цельсия, 
//преобразовать введенное пользователем значение в соответствующую 
//температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): 
//Цельсий: 21, Фаренгейт: 69.8
//Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
//были получены ранее.

const celsius = prompt("Enter temperature in Celsius:");

const fahrenheit = ((celsius * 1.8) + 32).toFixed(2);

let roundedCelsius = parseFloat(celsius).toFixed(2);

alert(roundedCelsius + "°C is equal to " + fahrenheit + "°F"); 
