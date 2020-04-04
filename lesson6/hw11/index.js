
function includes(numbers, n) {
  for (let num of numbers) {
    if (num == n) {
      return true;
    }
  }
  return false;
}
