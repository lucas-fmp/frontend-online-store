import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom';
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import magnifyingGlass from '../../assets/glass.svg';
import arrowBack from '../../assets/arrow-back.svg';

import './style.css';

class Header extends Component {
  handleVoltar = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { onHandleClick, onHandleChange, inputRef, query } = this.props;
    return (
      <div className="main-page-header">
        {
          onHandleClick && onHandleChange && inputRef ? (
            <form onSubmit={ onHandleClick }>
              <input
                type="text"
                data-testid="query-input"
                placeholder="Digite o que você busca"
                onChange={ onHandleChange }
                value={ query }
                ref={ inputRef }
              />
              <button
                type="submit"
                data-testid="query-button"
              >
                <img src={ magnifyingGlass } alt="Lupa" />
              </button>
            </form>
          ) : (
            <button type="button" onClick={ this.handleVoltar } className="button-back">
              <img src={ arrowBack } alt="Arrow Back" />
              <p>Voltar</p>
            </button>
          )
        }
        <Link to="/" className="logo-container">
          <img src={ logo } alt="Logomarca" />
          <div className="text-logo-container">
            <h1>
              FRONT-END
            </h1>
            <h4>
              online store
            </h4>
          </div>
        </Link>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <img className="cart-icon" src={ cart } alt="Carrinho" />
        </Link>
      </div>
    );
  }
}

export default withRouter(Header);

Header.propTypes = {
  inputRef: PropTypes.shape(),
  onHandleChange: PropTypes.func,
  onHandleClick: PropTypes.func,
  query: PropTypes.string,
  history: PropTypes.shape({
    goBack: PropTypes.shape(),
  }).isRequired,
};

Header.defaultProps = {
  inputRef: null,
  onHandleChange: null,
  onHandleClick: null,
  query: null,
};
