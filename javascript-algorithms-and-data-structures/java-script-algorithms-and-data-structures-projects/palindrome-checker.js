// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  const newStr = str.toLowerCase().replace(/[\W_]/g, "");
  return newStr === newStr.split("").reverse().join("");
}
