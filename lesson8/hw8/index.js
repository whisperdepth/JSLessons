
const buildObject = (keyList, valueList) => {
  let obj = {};
  for (let i = 0; i < keyList.length; i++) {
    obj[keyList[i]] = valueList[i];
  }
  return obj;
};

