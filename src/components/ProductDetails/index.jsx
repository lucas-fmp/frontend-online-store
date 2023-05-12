import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

class ProductDetails extends Component {
  addToCart = () => {
    const { product } = this.props;
    let gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

    if (!gettingProductsLocalStorage) {
      gettingProductsLocalStorage = JSON.stringify([product]);
      localStorage.setItem('cartItems', gettingProductsLocalStorage);
    } else {
      gettingProductsLocalStorage = [...gettingProductsLocalStorage, product];
      localStorage.setItem('cartItems', JSON.stringify(gettingProductsLocalStorage));
    }
  }

  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div className="product-details-container">
        <div className="product-details-left-side-container">
          <div className="name-image-product-container">
            <h4 data-testid="product-detail-name">{product.title}</h4>
            <img src={ product.pictures[0].url } alt="product" />
          </div>
        </div>
        <div className="product-details-right-side-container">
          <button
            type="button"
            onClick={ this.addToCart }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
