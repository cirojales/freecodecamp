// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
  if (arr[0] > arr[1]) arr.reverse();
  let range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  for (let i = 1; ; i++) {
    if (range.every((n) => i % n === 0)) {
      return i;
    }
  }
}