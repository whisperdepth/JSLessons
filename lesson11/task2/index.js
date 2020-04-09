const sortContacts = (contacts, boolean) => {
  if (!Array.isArray(contacts)) return null;
  if (boolean == false)
  return contacts.sort((a, b) => b.name.localCompare(a.name));

  return contacts.sort((a, b) => a.name.localCompare(b.name));
};
