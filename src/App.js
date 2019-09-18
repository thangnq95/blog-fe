import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/base.css';
// import './css/vendor.css';
import './css/main.css';

import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Extra from './Component/Extra/Extra';
import Footer from './Component/Footer/Footer';
import PreLoader from './Component/PreLoader/PreLoader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Extra />
        <Footer />
        {/* <PreLoader /> */}

      </div>
    );
  }
}

export default App;
