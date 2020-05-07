

const getPeople = (rooms) =>
  Object.values(rooms)
    .flat()
    .map((room) => room.name);

