import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import PageTitle from './components/PageTitle/PageTitle';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  /*
   { id: 'id-12345', name: 'Daniel Defoe', number: '987-6541210' },
      { id: 'id-54321', name: 'Jonathan Swift', number: '987-6542210' },
      { id: 'id-98765', name: 'Robert Stevenson', number: '987-6543210' },
      { id: 'id-56789', name: 'Lewis Carroll', number: '987-6544210' },
*/

  componentDidMount() {
    // console.log('C. was MOUNTED');

    const storedData = localStorage.getItem('al-phonebook');
    const parsedData = JSON.parse(storedData);

    this.setState(contacts => ({ contacts: parsedData }));
  }

  componentDidUpdate() {
    const { contacts } = this.state;

    // console.log('C. was UPDATED');

    localStorage.setItem('al-phonebook', JSON.stringify(contacts));
  }

  contactsChecker = name => {
    const { contacts } = this.state;

    return contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()),
    );
  };

  formSubmitHandler = ({ name, number }) => {
    const idSetter = `id-${Math.ceil(Math.random() * 100000)}`;
    const newContact = { id: idSetter, name, number };

    this.contactsChecker(name)
      ? alert(`${name} is already in contacts`)
      : this.setState(contacts => ({
          contacts: [...this.state.contacts, newContact],
        }));
  };

  filterHandler = ({ currentTarget }) => {
    this.setState({
      filter: currentTarget.value,
    });
  };

  filteredContacts = () => {
    // const { contacts, filter } = this.state;
    const normalizedText = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedText),
    );
  };

  deleteHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <PageTitle title={'HomeWork #3-Phonebook of React'} />
        <Form onSubmitData={this.formSubmitHandler} />
        <Filter contacts={this.state.filter} onChange={this.filterHandler} />
        <ContactList
          contacts={this.filteredContacts()}
          onClick={this.deleteHandler}
        />
      </>
    );
  }
}

export default App;
