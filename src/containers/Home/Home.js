import React, { Component } from 'react';

import Header from '../../components/Header/Header';

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
                <Header />
                {preload}
            </div>
        );
    };
}

export default Home;