import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/base.css';
import './assets/css/main.css';

import Router, { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          {/* <Header /> */}
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
