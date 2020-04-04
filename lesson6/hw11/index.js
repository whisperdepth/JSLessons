function includes(numbers, n) {
  for (let num in numbers) {
    if (numbers[num] == n) {
      return true;
    }
  }
  return false;
}
