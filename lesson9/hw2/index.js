

const getPeople = (rooms) => {

  let roomsArrFlat = Object.entries(rooms).map((room) => room[1]).flat();

  let roomsArrFiltered = roomsArrFlat.map((room) => Object.entries(room)).map((room) => room[0]);

  return roomsArrFiltered.map((room) => room[1]);
};

