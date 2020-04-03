let clients = ["Ann", "John", "User"];
let balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {
  let index;
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      index = i;
    }
  }

  if (balances[index] >= amount) {
    return (balances[index] = balances[index] - amount);
  } else {
    return -1;
  }
}
