const arrAverage = (numbers) => {
  if (!Array.isArray(numbers)) return null;
  return (numbers.reduce((acc, num) => acc + num, 0))/ numbers.length;
};
