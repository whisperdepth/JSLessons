const concatProps = (obj) => {
  let array = [];
  for (let key in obbj) array.push(obj[key]);
  return array;
};
