import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Li, Button } from './ContactItem.styled';

class ContactItem extends Component {
  handleDelete = () => {
    const { item, onDelete } = this.props;
    onDelete(item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <Li key={item.id}>
        {item.name}: {item.number}
        <Button type="button" onClick={this.handleDelete}>
          Delete
        </Button>
      </Li>
    );
  }
}

export { ContactItem };



ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};