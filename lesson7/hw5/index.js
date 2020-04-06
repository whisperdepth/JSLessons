const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] >= amount)
    return (balances[clients.indexOf(client)] =
      balances[clients.indexOf(client)] - amount);

  return -1;
};

