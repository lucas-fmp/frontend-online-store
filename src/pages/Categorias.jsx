import React, { Component } from 'react';
import { getCategories } from '../services/api';
import CategoryCard from './CategoryCard';

export default class Categorias extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then((data) => this.setState({ categorias: data }));
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        {categorias.map((categoria) => (
          <CategoryCard category={ categoria.name } key={ categoria.name } />
        ))}
      </div>
    );
  }
}
