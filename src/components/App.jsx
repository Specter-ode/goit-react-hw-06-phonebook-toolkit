import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, filterChange } from '../redux/contacts/contacts-actions';
import { getItems, getFilterValue } from '../redux/contacts/contacts-selectors';
import Container from './Container/Container';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const items = useSelector(getItems);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const onAddContact = newContactData => {
    const { name } = newContactData;
    if (
      items.find(
        contactFromPhonebook => contactFromPhonebook.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    } else if (name === '') {
      alert('Please enter your name');
      return;
    }
    dispatch(addContact(newContactData));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilter = e => {
    dispatch(filterChange(e.target.value));
  };

  const getVisibleContacts = () => {
    if (filterValue) {
      return items.filter(contact => contact.name.toLowerCase().includes(filterValue));
    }
    return items;
  };

  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <ContactForm catchSubmitInfo={onAddContact} />
        </Section>
        <Section title="Contacts">
          {items ? (
            <>
              <Filter catchFilterInfo={changeFilter} />
              <ContactList contacts={getVisibleContacts()} removeContact={onDeleteContact} />
            </>
          ) : (
            <p>No contacts in phonebook</p>
          )}
        </Section>
      </Container>
    </div>
  );
};
export default App;
