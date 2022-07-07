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

  render() {
    const result = this.validationProducts();
    return (
      <div>
        {
          Array.isArray(result) ? result.map(({ id, title, price, thumbnail }) => (
            <ProductCard
              key={ id }
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
            />)) : result
        }
      </div>
    );
  }
}

Products.propTypes = {
  filteredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isFiltered: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  searched: PropTypes.bool.isRequired,
};
