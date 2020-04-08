rooms = {
  room1: [
    { name: "room1 name1" },
    { name: "room1 name2" },
    { name: "room1 name3" },
    { name: "room1 name4" },
  ],

  room2: [{ name: "room2 name1" }],

  room3: [
    { name: "room3 name1" },
    { name: "room3 name2" },
    { name: "room3 name3" },
  ],
};

const getPeople = (rooms) => {

  let roomsArrFlat = Object.entries(rooms).map((room) => room[1]).flat();

  let roomsArrFiltered = roomsArrFlat.map((room) => Object.entries(room)).map((room) => room[0]);

  return roomsArrFiltered.map((room) => room[1]);
};

console.log(getPeople(rooms));
