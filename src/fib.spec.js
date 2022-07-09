const { fib } = require("./fib");

describe("Fibonacci Unity Tests", () => {
  test("Throw when parameter is not a number", () => {
    expect(() => fib("a")).toThrow();
    expect(() => fib(undefined)).toThrow();
    expect(() => fib(null)).toThrow();
  });

  test("Throw when parameter is negative", () => {
    expect(() => fib(-1)).toThrow();
  });

  test("Calculate fibonacci number", () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
    expect(fib(6)).toBe(8);
  })
});
