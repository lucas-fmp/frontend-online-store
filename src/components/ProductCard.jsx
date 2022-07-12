import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { id, title, price, thumbnail, shipping } = this.props;
    const { free_shipping: freeShipping } = shipping;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{title}</h3>
        <h4>{price}</h4>
        <Link data-testid="product-detail-link" to={ `/product/${id}` }>Details</Link>
        {
          freeShipping && <p data-testid="free-shipping">Frete grátis</p>
        }
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }).isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
