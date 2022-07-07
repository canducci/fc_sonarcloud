const { bin } = require("./bin");

describe("Binominal Unity Tests", () => {
  test("Throw when any parameter is not a number", () => {
    expect(() => bin("a", 1)).toThrow();
    expect(() => bin(1, "a")).toThrow();
    expect(() => bin(undefined, 1)).toThrow();
    expect(() => bin(1)).toThrow();
  });

  test("Throw when any parameter is negative", () => {
    expect(() => bin(-1, 1)).toThrow();
    expect(() => bin(1, -1)).toThrow();
  });

  test("Throw when n is less than k", () => {
    expect(() => bin(1, 2)).toThrow();
  });

  test("Calculate binominal number", () => {
    expect(bin(0, 0)).toBe(1);
    expect(bin(1, 0)).toBe(1);
    expect(bin(2, 1)).toBe(2);
    expect(bin(4, 1)).toBe(4);
    expect(bin(4, 2)).toBe(6);
    expect(bin(4, 3)).toBe(4);
    expect(bin(4, 4)).toBe(1);
  });
});
