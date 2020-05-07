const getCustomersList = (obj) =>
  Object.entries(obj)
    .map(([id, value]) => ({ id, ...value }))
    .sort((a, b) => a.age - b.age);

