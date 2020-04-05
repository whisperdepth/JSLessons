const getSpecialNumbers = numbers => numbers.filter((num) => num % 3 === 0);

let num = [1, 2, 3, 4, 5, 6];
console.log(getSpecialNumbers(num));
