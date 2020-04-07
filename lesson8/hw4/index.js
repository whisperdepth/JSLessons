const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;
};

const addPropertyV2 = (userData, userId) =>
  Object.assign(userData, { id: userId });

const addPropertyV3 = (userData, userId) =>
  Object.assign({}, userData, { id: userId });

const addPropertyV4 = (userData, userId) => {
  let copy = { ...userData };
  copy.id = userId;
  return copy;
};
