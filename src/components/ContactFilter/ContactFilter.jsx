import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './ContactFilter.styled';

class ContactFilter extends Component {
  render() {
    return (
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.filterInput}
        />
      </Label>
    );
  }
}
export { ContactFilter };

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterInput: PropTypes.func.isRequired,
};
