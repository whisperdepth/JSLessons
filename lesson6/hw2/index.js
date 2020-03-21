function squareArray(arr) {
  let myArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let num of arr) {
    myArr.push(num * num);
  }
  return myArr;
}
