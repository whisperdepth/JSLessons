const getCustomersList = customers => {
  /*let copy = JSON.parse(JSON.stringify(customers));*/
  
  let copy = { ...customers };
  for (let key in copy) {
    copy[key] = { ...customers[key] };
  }

  let customersArray = Object.entries(copy);

  let customersArrayChanged = customersArray.map((customer) => {
    customer[1].id = customersArray[customersArray.indexOf(customer)][0];
    return customer;
  });

  return customersArrayChanged
    .map((customer) => customer[1])
    .sort((a, b) => a.age - b.age);
};

