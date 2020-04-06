const increaseEvenEl = (numbers, delta) => {
  if (!Array.isArray(numbers)) return null;

  return numbers.map(num => {
      if (num % 2 === 0 )
         return num = num + delta;
         return num;   
  });
};
