import React, { Component } from 'react';
import './App.css';
import './assets/css/font-awesome/css/font-awesome.min.css';
import './assets/css/font-awesome/fonts/fontawesome-webfont.woff';
import './assets/css/base.css';
import './assets/css/fonts.css';
import './assets/css/main.css';

import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import Category from './containers/Category/Category';
import SingleVideo from './containers/Single/Video/SingleVideo';
import StyleGuide from './containers/StyleGuide/StyleGuide';
import Contact from './containers/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/lifestyle" exact component={Category} />
            <Route path="/single-video" exact component={SingleVideo} />
            <Route path="/style-guide" exact component={StyleGuide} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
