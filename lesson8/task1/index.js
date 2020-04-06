const transformToObject = (array) => {
  let obj = {};

  array.forEach((el) => (obj[el] = el));

  return obj;
};
