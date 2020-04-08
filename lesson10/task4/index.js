const getMaxAbsoluteNumber = (numbers) =>{
  if(!Array.isArray(numbers) || numbers.length == 0) return null;
  return Math.max(...numbers.map((num) => Math.abs(num)))
};
