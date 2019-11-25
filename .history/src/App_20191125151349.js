import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/base.css';
import './assets/css/main.css';

import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Home />
          {/* <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch> */}
        </Layout>
      </div>
    );
  }
}

export default App;
