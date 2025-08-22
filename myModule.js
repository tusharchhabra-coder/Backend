// myModule.js

// Nested object
exports.user = {
  name: "Tushar",
  age: 20,
  address: {
    city: "Dehradun",
    state: "Uttarakhand",
  },
};

// Object containing functions
exports.calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

// Direct function export
exports.sayHello = function (name) {
  return `Hello, ${name}!`;
};
