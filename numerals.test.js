const numerals = require("./numerals");

describe("roman numerals convertor", () => {
  it("expects 1 to be I", () => {
    expect(numerals(1)).toBe("I");
  });
  it("expects 2 to be II", () => {
    expect(numerals(2)).toBe("II");
  });
  it("expects 3 to be III", () => {
    expect(numerals(3)).toBe("III");
  });
});
