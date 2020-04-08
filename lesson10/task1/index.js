const getFiniteNumbers = (numbers) =>
  numbers.filter((num) => Number.isFinite(num));
const getFiniteNumbersV2 = (numbers) => numbers.filter((num) => isFinite(num));
const getNaN = (numbers) => numbers.filter((num) => Number.isNaN(num));
const getNaNV2 = (numbers) => numbers.filter((num) => isNaN(num));
const getIntegers = (numbers) => numbers.filter((num) => Number.isInteger(num));
