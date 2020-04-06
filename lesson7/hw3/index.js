const increaseEvenEl = (numbers, delta) => {
  if (!Array.isArray(numbers)) return null;

  return numbers.map((num) => num + delta);
};
