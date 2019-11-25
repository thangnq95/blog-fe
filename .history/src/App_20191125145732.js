import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/base.css';
// import './css/vendor.css';
import './assets/css/main.css';

import Router,{ Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Content /> */}
        {/* <SingleStandard /> */}
        {/* <Extra /> */}
        {/* <Footer /> */}
        {/* <PreLoader /> */}

      </div>
    );
  }
}

export default App;
