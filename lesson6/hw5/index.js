let arr1 = [1, 2, 10, 5];

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

console.log(reverseArray(arr1));
