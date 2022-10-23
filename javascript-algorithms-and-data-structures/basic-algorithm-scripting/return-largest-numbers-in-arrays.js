// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

function largestOfFour(arr) {
  return arr.map((innerArr) => Math.max(...innerArr));
}