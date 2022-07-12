import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class Products extends Component {
  validationProducts = () => {
    const { isFiltered, products, filteredProducts, searched } = this.props;
    if (isFiltered) return filteredProducts;
    if (searched && products.length === 0) {
      return (
        <div>Nenhum produto foi encontrado</div>
      );
    }
    if (searched) return products;
    return (
      <div
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  };

  addingProductToCart = ({ target }) => {
    const { id } = target;
    const result = this.validationProducts();
    const filterCart = result.filter((item) => item.id === id);
    filterCart[0].quantity = 1;
    let gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

    if (!gettingProductsLocalStorage) {
      gettingProductsLocalStorage = JSON.stringify(filterCart);
      localStorage.setItem('cartItems', gettingProductsLocalStorage);
    } else {
      gettingProductsLocalStorage = [...gettingProductsLocalStorage, filterCart[0]];
      localStorage.setItem('cartItems', JSON.stringify(gettingProductsLocalStorage));
    }
  }

  render() {
    const result = this.validationProducts();
    return (
      <div>
        {
          Array.isArray(result) ? result
            .map(({ id, title, price, thumbnail, shipping }) => (
              <div key={ id }>
                <ProductCard
                  key={ id }
                  id={ id }
                  title={ title }
                  price={ price }
                  thumbnail={ thumbnail }
                  shipping={ shipping }
                />
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  id={ id }
                  onClick={ this.addingProductToCart }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            )) : result
        }
      </div>
    );
  }
}

Products.propTypes = {
  filteredProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  isFiltered: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  searched: PropTypes.bool.isRequired,
};
