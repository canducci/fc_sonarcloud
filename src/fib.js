module.exports.fib = (n) => {
  if (isNaN(n) || n === null) {
    throw new Error("n should be a number");
  }

  if (n < 0) {
    throw new Error("n should be greater than zero");
  }

  let [f0, f1] = [0, 1];

  for (let i = 1; i <= n; i++) {
    [f0, f1] = [f1, f0 + f1];
  }

  return f0;
};
