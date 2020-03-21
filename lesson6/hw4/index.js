function increaseEvenEl(arr, delta) {
  let myArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let num of arr) {
    if (num % 2 === 0) {
      myArr.push(num + delta);
    } else {
      myArr.push(num);
    }
  }
  return myArr;
}
