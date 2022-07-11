import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductDetails extends Component {
  addToCart = () => {
    const { product } = this.props;
    let gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

    if (!gettingProductsLocalStorage) {
      gettingProductsLocalStorage = JSON.stringify(product);
      localStorage.setItem('cartItems', gettingProductsLocalStorage);
    } else {
      gettingProductsLocalStorage = [...gettingProductsLocalStorage, product];
      localStorage.setItem('cartItems', JSON.stringify(gettingProductsLocalStorage));
    }
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <button
          type="button"
          onClick={ this.addToCart }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
