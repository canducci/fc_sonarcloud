const Sample = require(".");

describe("Sample Unit Tests", () => {
  it("should create class Sample", () => {
    expect(new Sample()).toBeInstanceOf(Sample);
  });
});
