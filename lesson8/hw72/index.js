

const compareObjects = (object1, object2) => {
  if (object1 === object2) return true;

  if (Object.keys(object1).length != Object.keys(object2).length) return false;

  for (let key in object1) {
    if (object1[key] != object2[key] || object1.key != object2.key)
      return false;
  }
  return true;
};
