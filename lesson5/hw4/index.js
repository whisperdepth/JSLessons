function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  } else {
    return false;
  }
}

function sum(x, y) {
  let result = 0;
  for (let i = x; i <= y; i++) {
    result += i;
  }
  return result;
}
