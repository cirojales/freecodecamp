// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
  const pairs = [];
  const characters = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  for (let letter of str) {
    pairs.push([letter, characters[letter]]);
  }
  return pairs;
}
