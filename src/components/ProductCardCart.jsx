import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCardCart extends Component {
  render() {
    const { id, title, price, thumbnail, quantity } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <h4>{price}</h4>
        <Link data-testid="product-detail-link" to={ `/product/${id}` }>Details</Link>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {' '}
          {quantity}
        </p>
      </div>
    );
  }
}

ProductCardCart.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
