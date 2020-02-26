import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/font-awesome/css/font-awesome.min.css';
import './assets/css/font-awesome/fonts/fontawesome-webfont.woff';
import './assets/css/base.css';
import './assets/css/fonts.css';
import './assets/css/main.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Home from './containers/Home/Home';
import About from './containers/About/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
