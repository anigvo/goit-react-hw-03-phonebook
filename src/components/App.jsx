import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { H1, H2, Container, Wrapper } from './App.styled';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (contactName, contactNumber) => {
    const contactId = nanoid();
    const newContact = {
      id: contactId,
      name: contactName,
      number: contactNumber,
    };
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      alert(`${contactName} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log(this.state.contacts);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const normalizeFilter = this.state.filter.toLocaleLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );

    return (
      <Container>
        <H1>Phonebook</H1>
        <ContactForm addContact={this.addContact} />
        <H2>Contacts</H2>
        <Wrapper>
          <ContactFilter
            filter={this.state.filter}
            filterInput={this.filterInput}
          />
          <ContactList
            filterContacts={filterContacts}
            deleteContact={this.deleteContact}
          />
        </Wrapper>
      </Container>
    );
  }
}

export { App };

