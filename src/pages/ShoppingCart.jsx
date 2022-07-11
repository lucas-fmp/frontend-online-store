import React, { Component } from 'react';
import ProductCardCart from '../components/ProductCardCart';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
    if (gettingProductsLocalStorage !== null) {
      this.setState({ products: gettingProductsLocalStorage });
    }
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        {
          products.length > 0 ? (
            products
              .map(({ id, title, price, thumbnail, quantity }, index) => (
                <div key={ index }>
                  <ProductCardCart
                    key={ id }
                    id={ id }
                    title={ title }
                    price={ price }
                    thumbnail={ thumbnail }
                    quantity={ quantity }
                  />
                </div>
              ))
          ) : (
            <div
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </div>
          )
        }
      </div>
    );
  }
}
