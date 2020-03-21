function increaseEven(arr, delta) {
  let myArr = [];
  if (!Array.isArray) {
    return null;
  }
  for (let num of arr) {
    if (n % 2 === 0) {
      myArr.push(num + delta);
    } else {
      myArr.push(num);
    }
  }
  return myArr;
}
