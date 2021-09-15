const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.toString() === arrayTwo.toString()) {
    console.log(`Array 1: ${arrayOne} is equal to ${arrayTwo}.`)
    return true;
  } else if (arrayOne.toString() !== arrayTwo.toString()) {
    console.log(`Array 1: ${arrayOne} is not equal to ${arrayTwo}.`)
    return false;
  };
  
};



//TESTS
(eqArrays([1, 2, 3], [1, 2, 3]), true);
(eqArrays([1, 2, 3], [1, 4, 3]), false);
(eqArrays([1, 7, 3], [1, 47, 3]), false);
(eqArrays([7, 7, 7], [7, 7, 7]), true);