const math = require(".");

describe("Module test", () => {
    test("fib fn", ()=>{
        expect(math.fib).toBeDefined();
    })
    test("bin fn", ()=>{
        expect(math.bin).toBeDefined();
    })
});
