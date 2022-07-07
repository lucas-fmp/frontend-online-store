import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CategoryCard extends Component {
  render() {
    const { category } = this.props;
    return (
      <button data-testid="category" type="button">
        { category }
      </button>
    );
  }
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
};
