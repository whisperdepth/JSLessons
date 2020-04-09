const cleanTransactionsList = (arr) => {
  let arr2 = arr.map((el) => +el);

  for (let i = 0; i < arr2.length; i++) {
    if (isNaN(arr2[i])) arr2.splice(i, 1);
  }

  return arr2.map((el) => "$" + el.toFixed(2));
};
