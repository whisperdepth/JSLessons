const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;
};

const addPropertyV2 = (userData, userId) =>
  Object.assign(userData, userId);

const addPropertyV3 = (userData, userId) => {
  let copy = Object.assign({}, userData, userId);
  return copy;
};

const addPropertyV4 = (userData, userId) => {
  let copy = { ...userData };
  copy.id = userId;
  return copy;
};

