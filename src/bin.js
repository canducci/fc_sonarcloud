module.exports.bin = (n, k) => {
  if (isNaN(n) || n === null || isNaN(k) || k === null) {
    throw new Error(`"n" and "k" should be numbers`);
  }
  if (n < 0 || k < 0) {
    throw new Error(`"n" and "k" should be greater than zero`);
  }
  if (n < k) {
    throw new Error(`"n" should be greater or equals "k"`);
  }

  let c = 1;
  
  if (n - k < k) k = n - k;

  for (let i = 0; i < k; i++) {
    c = c * (n - i) / (i + 1);
  }

  return c;
};
