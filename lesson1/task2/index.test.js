import getSum, { getSquareNumbers, getOddNumbers } from "./calculator.js";

it("should get squared numbers", () => {
  const result = getSquareNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it("should get keep odd numbers only", () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should get sum", () => {
      const result = getSum(1, 2);
      expect(result).toEqual(3);
  })