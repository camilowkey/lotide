const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const head = function(array) {
  if (array === 0) {
    console.log("undefined");
  }
  for (let i = 0; i < array.length; i++) {
    console.log(array[0]);
  }
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["seven"]), "seven");
assertEqual(head([7]), 7);
assertEqual(head([77]), 7);
assertEqual([]);