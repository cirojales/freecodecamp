// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice(0);
  newArr.splice(n, 0, ...arr1);
  return newArr;
}
