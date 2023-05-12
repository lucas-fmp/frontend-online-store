import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, shipping } = this.props;
    const { free_shipping: freeShipping } = shipping;
    return (
      <div data-testid="product" className="product-card-content">
        <img src={ thumbnail } alt={ title } />
        <p className="product-card-content-name">{title}</p>
        <p className="product-card-content-price">
          <span>R$ </span>
          {price.toFixed(2).replace('.', ',')}
        </p>
        {
          freeShipping && (
            <div
              data-testid="free-shipping"
              className="product-free-shipping"
            >
              <p>Frete</p>
              <p>Grátis!</p>
            </div>
          )
        }
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }).isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
