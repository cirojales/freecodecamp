// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

function telephoneCheck(str) {
  const regex =
    /^\d{3}(-|\s|)\d{3}(-|\s|)\d{4}$|^\(\d{3}\)(\s|)\d{3}-\d{4}$|^1\s\d{3}(\s|-)\d{3}(\s|-)\d{4}$|^1(\s|)\(\d{3}\)(\s|)\d{3}-\d{4}$/;
  return regex.test(str);
}
