// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
  let consonantCluster = str.match(/^[^aeiou]*/)[0];
  if (/^[aeiou]+/.test(str)) {
    return str + "way";
  } else {
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }
}