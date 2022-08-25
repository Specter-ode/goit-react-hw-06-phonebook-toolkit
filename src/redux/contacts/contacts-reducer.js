import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterChange } from './contacts-actions';

export const itemsReducer = createReducer([], {
  [addContact.type]: (store, action) => [...store, action.payload],
  [deleteContact.type]: (store, action) => store.filter(contact => contact.id !== action.payload),
});

export const filterReducer = createReducer('', {
  [filterChange.type]: (_, action) => action.payload.toLowerCase().trim(),
});
