import React, { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';
export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsStorage = localStorage.getItem('contactsStorage');
    const parsedContacts = JSON.parse(contactsStorage);
    if (parsedContacts.length > 0) setContacts(parsedContacts);
    console.log('contacts in Mount = ', contacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contactsStorage', JSON.stringify(contacts));
    console.log('contacts in Update = ', contacts);
  }, [contacts]);

  const onSubmitForm = (data, resetForm) => {
    const { name } = data;
    const alertState = contacts.find(contact => contact.name === name);
    if (!alertState) {
      setContacts(prevContacts => [...prevContacts, data]);
      resetForm.reset();
    } else alert(`${name} is already in contacts`);
  };

  const onFilterByName = eventFilter => {
    const filterValue = eventFilter.target.value.toLowerCase().trim();
    setFilter(filterValue);
  };

  const onClickDelete = idDelete => {
    setContacts(contacts.filter(contact => contact.id !== idDelete));
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter)
  );
  return (
    <div className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmitForm={onSubmitForm} />
      {contacts.length ? <h2 className={css.title}>Contacts</h2> : null}
      {contacts.length ? <Filter onFilterByName={onFilterByName} /> : null}
      {contacts.length ? (
        <ContactList
          contacts={filterContacts}
          // contacts={this.state.contacts}
          onClickDelete={onClickDelete}
        />
      ) : null}
    </div>
  );
}
