// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

/*
const eqArrays = function(arrayOne, arrayTwo) {
  
  for (let i = 0; i < arrayOne.length; i++) {
   for (let j = 0; j < arrayTwo.length; j++){
     let valueOne = arrayOne[i];
     let valueTwo = arrayTwo[j];
     if (valueOne === valueTwo) {
       return true;
     } else {
       return false;
     }
      //console.log(arrayOne[i] + " array one");  
      //console.log(arrayTwo[j] + " array two");
    }
  };
      
}
*/

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.toString() === arrayTwo.toString()) {
    return true;
  } else if (arrayOne.toString() !== arrayTwo.toString()) {
    return false;
  };
  
};



//TESTS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
assertEqual(eqArrays([1, 7, 3], [1, 47, 3]), false);
assertEqual(eqArrays([7, 7, 7], [7, 7, 7]), true);

