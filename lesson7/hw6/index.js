const sum = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, elem) => acc + elem, 0);
};
