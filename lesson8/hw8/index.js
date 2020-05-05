const buildObject = (keyList, valueList) => {
  let obj = keyList.reduce((acc, key, index) => {
    return {...acc, [key]: valueList[index]};
  }, {});
  return obj;
};

