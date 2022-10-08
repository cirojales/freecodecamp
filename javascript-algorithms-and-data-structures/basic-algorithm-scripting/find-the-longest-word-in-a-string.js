// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}