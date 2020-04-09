const sortContacts = (contacts, boolean) => {
  if (!Array.isArray(contacts)) return null;
  if (boolean == false)
  return contacts.sort((a, b) => b.name.localeCompare(a.name));

  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};
