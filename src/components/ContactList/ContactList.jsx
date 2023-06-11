import React, { Component } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { Ul } from './ContactList.styled';

class ContactList extends Component {
  handleDelete = contactId => {
    this.props.deleteContact(contactId);
  };
  render() {
    return (
      <Ul>
        {this.props.filterContacts.map(item => (
          <ContactItem item={item} key={item.id} onDelete={this.handleDelete} />
        ))}
      </Ul>
    );
  }
}

export { ContactList };

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};