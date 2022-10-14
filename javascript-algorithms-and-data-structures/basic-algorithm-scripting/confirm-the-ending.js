// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

function confirmEnding(str, target) {
  return new RegExp(`${target}$`).test(str);
}