function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  const [...myArr] = arr;
  return myArr;
}
