import React, { Component } from 'react';
import ProductCardCart from '../components/ProductCardCart';

export default class ShoppingCart extends Component {
  render() {
    const gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
    console.log(gettingProductsLocalStorage);
    return (
      <div>
        {
          gettingProductsLocalStorage ? (
            gettingProductsLocalStorage
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
