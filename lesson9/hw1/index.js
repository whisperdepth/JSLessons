const getCustomersList = customers => {

  let customersArray = Object.entries(customers );

  let customersArrayChanged = customersArray.map((customer) => {
    customer[1].id = customersArray[customersArray.indexOf(customer)][0];
    return customer;
  });

  return customersArrayChanged
    .map((customer) => customer[1])
    .sort((a, b) => a.age - b.age);
};

