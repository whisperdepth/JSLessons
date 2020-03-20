let sum = 0;
function getSum(m, n) {
  for (let i = m; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
