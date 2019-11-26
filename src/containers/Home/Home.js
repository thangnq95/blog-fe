import React, { Component } from 'react';
import Router, { Route, Switch } from 'react-router-dom';

import PageHeader from '../../components/PageHeader/PageHeader';
import Content from '../../components/Content/Home/Content';
import About from '../../components/Content/About/About';
import Preload from '../../components/PreLoader/PreLoader';

class Home extends Component {
    state = {
        loading: true
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
    }

    render() {
        let preload = null;
        if (this.state.loading) {
            preload = <Preload />;
        }
        return (
            <div>
                <PageHeader />
                <Route path="/" exact component={Content} />
                <Route path="/category" component={About} />
                {preload}
            </div>
        );
    };
}

export default Home;