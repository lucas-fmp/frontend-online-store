import React, { Component } from 'react';
import ProductCardCart from './ProductCardCart';

export default class Checkout extends Component {
  render() {
    const gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        <fieldset>

          <h2><b>Revise seus produtos</b></h2>
          {

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
          }
        </fieldset>
        <fieldset>

          <div>
            <h2><b>Informações do Comprador</b></h2>
            <label htmlFor="fullname">
              Nome Completo:
              <input
                data-testid="checkout-fullname"
                type="text"
                name="fullname"
                id="fullname"
              />
            </label>
            <label htmlFor="cpf">
              CPF:
              <input
                data-testid="checkout-email"
                type="numbers"
                name="cpf"
                id="cpf"
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                data-testid="checkout-cpf"
                type="email"
                name="email"
                id="email"
              />
            </label>
            <label htmlFor="telefone">
              Telefone:
              <input
                data-testid="checkout-phone"
                type="numbers"
                name="telefone"
                id="fulltelefone"
              />
            </label>
            <label htmlFor="fullname">
              CEP:
              <input
                data-testid="checkout-cep"
                type="numbers"
                name="cep"
                id="cep"
              />
            </label>
            <label htmlFor="endereço">
              Endereço:
              <input
                data-testid="checkout-address"
                type="text"
                name="endereço"
                id="endereço"
              />
            </label>
            <label htmlFor="complemento">
              Complemento:
              <input
                type="text"
                name="complemento"
                id="complemento"
              />
            </label>
            <label htmlFor="numero">
              Numero:
              <input
                type="number"
                name="numero"
                id="numero"
              />
            </label>
            <label htmlFor="cidade">
              Cidade:
              <input
                type="text"
                name="cidade"
                id="cidade"
              />
            </label>
            <label htmlFor="estados">
              Estado:
              <input
                type="text"
                name="estado"
                id="estado"
              />
            </label>

          </div>
        </fieldset>
      </div>
    );
  }
}
