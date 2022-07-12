import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCardCart extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
  }

  increaseQuantity = () => {
    const { quantity } = this.state;
    const newQuantity = quantity + 1;
    this.setState({ quantity: newQuantity });
  }

  decreaseQuantity = () => {
    const { quantity } = this.state;
    const newQuantity = quantity - 1;
    if (newQuantity < 1) {
      this.setState({ quantity: 1 });
    } else { this.setState({ quantity: newQuantity }); }
  }

  render() {
    const { id, title, price, thumbnail } = this.props;
    const { quantity } = this.state;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <h4>{price}</h4>
        <Link data-testid="product-detail-link" to={ `/product/${id}` }>Details</Link>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increaseQuantity }
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {' '}
          {quantity}
        </p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseQuantity }
        >
          -
        </button>
      </div>
    );
  }
}

ProductCardCart.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
