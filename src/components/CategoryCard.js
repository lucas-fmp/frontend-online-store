import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CategoryCard extends Component {
  render() {
    const { category, id, onClickCategoryButton } = this.props;
    return (
      <button
        data-testid="category"
        type="button"
        id={ id }
        onClick={ onClickCategoryButton }
      >
        { category }
      </button>
    );
  }
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickCategoryButton: PropTypes.func.isRequired,
};
