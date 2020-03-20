function getSum(m, n) {
  let sum = 0;
  for (let i = m; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
