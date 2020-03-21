function checker(arr) {
  let min = arr[0];
  let max = arr[0];

  if (!Array.isArray(arr)) {
    return null;
  }
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  let sum = max + min;
  return sum;
}
