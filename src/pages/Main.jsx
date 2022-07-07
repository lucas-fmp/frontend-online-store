import React, { Component } from 'react';
import Categorias from './Categorias';

export default class Main extends Component {
  render() {
    return (
      <div
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
        <category />
        <Categorias />
      </div>
    );
  }
}
