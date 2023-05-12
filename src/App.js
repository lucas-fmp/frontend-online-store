import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/index';
import ProductPage from './pages/ProductPage/index';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/product/:id" component={ ProductPage } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
