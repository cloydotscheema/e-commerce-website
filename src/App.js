import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/homepage/homepage-component';
import ShopPage from './Pages/shop/shop-component';
import CheckoutPage from './Pages/checkout/checkout-component';
import Header from './components/header/header-component';

class App extends Component {
  render() {
    return <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>;
  }
};

export default connect()(App);
