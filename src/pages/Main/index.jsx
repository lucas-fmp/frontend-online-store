import React, { Component } from 'react';
import Categorias from '../../components/Categories/index';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import Products from '../../components/Products/index';
import Header from '../../components/Header/index';

import './style.css';

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

    this.inputRef = React.createRef();
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

  onHandleClick = async (event) => {
    event.preventDefault();
    const { query } = this.state;
    const data = await getProductsFromCategoryAndQuery(query);
    this.setState(
      { products: data.results, searched: true, isFiltered: false },
      () => {
        if (this.inputRef.current) {
          this.inputRef.current.blur();
        }
      },
    );
  }

  render() {
    const {
      products, query, searched, isFiltered, filteredProducts,
    } = this.state;
    return (
      <div className="main-page-container">
        <Header
          onHandleClick={ this.onHandleClick }
          onHandleChange={ this.onHandleChange }
          inputRef={ this.inputRef }
          query={ query }
        />
        <div className="main-page-body">
          <Categorias onClickCategoryButton={ this.onClickCategoryButton } />
          <Products
            isFiltered={ isFiltered }
            searched={ searched }
            products={ products }
            filteredProducts={ filteredProducts }
          />
        </div>
      </div>
    );
  }
}
