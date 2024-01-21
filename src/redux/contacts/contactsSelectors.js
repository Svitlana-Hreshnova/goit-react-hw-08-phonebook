import { createSelector } from 'reselect';

const selectContacts = (state) => state.contacts.items;
const selectFilter = (state) => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedName = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedName));
  }
);

