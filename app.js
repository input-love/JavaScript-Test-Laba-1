function findArithmeticProgression(a, b, c) {
  if (b < a) return -2;

  for (argument of arguments) {
    if (argument < 1 || argument > 1000) {
      return -2;
    }
  }

  let res = a + (b - a) * (c - 1);
  return res;
}

module.exports = findArithmeticProgression;