
const getAdults = (obj) => {
  let adults = {};
  for (let key in obj) {
    if (obj[key] > 17) {
      adults[key] = obj[key];
    }
  }
  return adults;
};

