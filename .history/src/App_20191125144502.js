import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/base.css';
// import './css/vendor.css';
import './assets/css/main.css';

import Router,{Route} from 'react-dom';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Extra from './components/Extra/Extra';
import Footer from './components/Footer/Footer';
import SingleStandard from './components/Content/SingleStandard/SingleStandard';
// import PreLoader from './components/PreLoader/PreLoader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Content /> */}
        <SingleStandard />
        <Extra />
        <Footer />
        {/* <PreLoader /> */}
        <Route path="/" exact render={()=><h1>AAAAAAAAA</h1>}
        <Route path="/" exact render={()=><h1>AAAAAAAAA</h1>}

      </div>
    );
  }
}

export default App;
