// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}
