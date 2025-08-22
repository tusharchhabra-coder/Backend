const myModule = require("./myModule");

console.log(myModule.user.name);// Tushar
console.log(myModule.user.address.city);// Dehradun

console.log(myModule.calculator.add(10, 5));
console.log(myModule.calculator.subtract(10, 5));

console.log(myModule.sayHello("World"));
