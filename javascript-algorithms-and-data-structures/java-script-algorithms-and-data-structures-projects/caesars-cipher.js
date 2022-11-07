// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const output = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let result = "";

  for (let char of str) {
    result += output[input.indexOf(char)] || char;
  }
  return result;
}
