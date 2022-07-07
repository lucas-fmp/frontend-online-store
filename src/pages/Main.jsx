import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searched: false,
      query: '',
    };
  }

  onHandleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  }

  onHandleClick = async () => {
    const { query } = this.state;
    const data = await getProductsFromCategoryAndQuery(query);
    this.setState({ products: data, searched: true });
  }

  render() {
    const { products, query, searched } = this.state;
    const resultRender = searched
      ? <div>Nenhum produto foi encontrado</div>
      : (
        <div
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>);
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
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
        {products.length === 0
          ? (resultRender)
          : (
            <div>
              {products.map(({ id, title, price, thumbnail }) => (
                <ProductCard
                  key={ id }
                  title={ title }
                  price={ price }
                  thumbnail={ thumbnail }
                />))}
            </div>
          )}
      </div>
    );
  }
}
