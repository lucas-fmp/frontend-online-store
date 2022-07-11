import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categorias from '../components/Categorias';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searched: false,
      query: '',
      filteredProducts: [],
      isFiltered: false,
    };
  }

  onClickCategoryButton = ({ target }) => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          filteredProducts: data.results,
          isFiltered: true,
          searched: false,
        });
      });
  }

  onHandleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  }

  onHandleClick = async () => {
    const { query } = this.state;
    const data = await getProductsFromCategoryAndQuery(query);
    this.setState({ products: data.results, searched: true, isFiltered: false });
  }

  render() {
    const {
      products, query, searched, isFiltered, filteredProducts,
    } = this.state;
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <div>
          <Categorias onClickCategoryButton={ this.onClickCategoryButton } />
        </div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.onHandleChange }
          value={ query }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.onHandleClick }
        >
          Search
        </button>
        <Products
          isFiltered={ isFiltered }
          searched={ searched }
          products={ products }
          filteredProducts={ filteredProducts }
        />
      </div>
    );
  }
}
