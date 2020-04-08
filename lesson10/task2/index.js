const getParsedIntegers = (numbers) =>
  numbers.map((num) => Number.parseInt(num));

const getParsedIntegersV2 = (numbers) => numbers.map((num) => parseInt(num));

const getParsedFloats = (numbers) =>
  numbers.map((num) => Number.parseFloat(num));

const getParsedFloatsV2 = (numbers) => numbers.map((num) => parseFloat(num));
