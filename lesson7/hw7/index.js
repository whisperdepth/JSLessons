const filterNames = (array, text) =>
  array.filter((arr) => {
    if (arr.includes(text) && arr.length > 5) return true;
  });
