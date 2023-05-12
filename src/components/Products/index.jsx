import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import ProductCard from '../ProductCard/index';
import './style.css';

export default class Products extends Component {
  validationProducts = () => {
    const { isFiltered, products, filteredProducts, searched } = this.props;
    if (isFiltered) return filteredProducts;
    if (searched && products.length === 0) {
      return (
        <div className="product-message">
          <h3>
            NENHUM PRODUTO
            {' '}
            <br />
            {' '}
            FOI ENCONTRADO
          </h3>
          <p>
            Digite outro termo de pesquisa ou
            {' '}
            <br />
            {' '}
            escolha uma categoria.
          </p>

        </div>
      );
    }
    if (searched) return products;
    return (
      <div
        data-testid="home-initial-message"
        className="product-message"
      >
        <h3>
          VOCÊ AINDA NÃO
          {' '}
          <br />
          {' '}
          REALIZOU UMA BUSCA
        </h3>
        <p>
          Digite algum termo de pesquisa ou
          {' '}
          <br />
          {' '}
          escolha uma categoria.
        </p>
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
      <div className="product-container">
        {
          Array.isArray(result) ? result
            .map(({ id, title, price, thumbnail, shipping }) => (
              <Link to={ `/product/${id}` } key={ id } className="product-card">
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
              </Link>
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
