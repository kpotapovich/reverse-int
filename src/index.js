module.exports = function reverse (n) {
  let result = 0;
  for (let m = Math.abs(n); m > 0; m = Math.trunc(m / 10)) {
      result = result * 10 + m % 10;
  }
  return result;
}
