// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

function truncateString(str, num) {
  if (str.length > num) {
    return str.substring(0, num) + "...";
  } else {
    return str;
  }
}