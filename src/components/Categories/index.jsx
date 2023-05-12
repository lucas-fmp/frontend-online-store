import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getCategories } from '../../services/api';
import CategoryCard from '../CategoryCard/index';
import './style.css';

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
    const { onClickCategoryButton } = this.props;
    const { categorias } = this.state;
    return (
      <aside>
        <h6>Categorias</h6>
        <hr />
        <ul>
          {categorias.map((categoria) => (
            <CategoryCard
              category={ categoria.name }
              key={ categoria.name }
              id={ categoria.id }
              onClickCategoryButton={ onClickCategoryButton }
            />
          ))}
        </ul>
      </aside>
    );
  }
}

Categorias.propTypes = {
  onClickCategoryButton: PropTypes.func.isRequired,
};
