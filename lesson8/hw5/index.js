let obj = {};

const addPropertyV1 = (obj, key, value) => {
  obj[key] = value;
  return obj;
};

const addPropertyV2 = (obj, key, value) => Object.assign(obj, { [key]: value });

const addPropertyV3 = (obj, key, value) =>
  Object.assign({}, obj, { [key]: value });

const addPropertyV4 = (obj, key, value) => {
  copy = { ...obj };
  copy[key] = value;
  return copy;
};
