function findDivCount(a, b, n) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    if (i % n === 0) {
      result += 1;
    }
  }
  return result;
}
console.log(findDivCount(1, 10, 3));
