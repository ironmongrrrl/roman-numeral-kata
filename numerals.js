const numeralsLookUp = {
  1000: "M",
  500: "D",
  100: "C",
  50: "L",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};


function numerals(number) {
let numeral = "";
  Object.entries(numeralsLookUp)
    .reverse()
    .forEach(([key, value]) => {
      if (number / key >= 1 || number > 0) {
        while (number >= key) {
          number = number - key;
          numeral += value;
        }
      }
    });
  return numeral;
}

module.exports = numerals;
