import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', formData => {
  return {
    payload: { ...formData, id: nanoid() },
  };
});

export const deleteContact = createAction('contacts/delete');
export const filterChange = createAction('contacts/filter');
