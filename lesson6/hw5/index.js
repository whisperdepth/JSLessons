function reverseArray(arr) {
  let myArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 1; i <= arr.length; i++) {
    myArr.push(arr[arr.length - i]);
  }
  return myArr;
}

