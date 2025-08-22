exports.user = {
  name: "Tushar",
  age: 20,
  address: {
    city: "Dehradun",
    state: "Uttarakhand",
  },
};

exports.calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

exports.sayHello = function (name) {
  return `Hello, ${name}!`;
};
