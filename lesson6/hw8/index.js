function sortAsc(array) {
  let iterations = array.length;
  let sorted = [];
  let max = -Infinity;
  if (!Array.isArray(array)) {
    return null;
  }
  for (let n = 0; n < iterations; n++) {
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    sorted.push(max);
    max = -Infinity;
    for (let i = 0; i < array.length; i++) {
      for (j = 0; j < sorted.length; j++) {
        if (array[i] === sorted[j]) {
          array.splice(i, 1);
        }
      }
    }
  }
  return sorted;
}

