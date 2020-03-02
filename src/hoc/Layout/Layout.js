import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';

import PageHeader from '../../components/PageHeader/PageHeader';
import Exta from '../../components/Extra/Extra';
import Footer from '../../components/Footer/Footer';
import Preload from '../../components/PreLoader/PreLoader';

class Layout extends Component {
    state = {
        loading: true
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
    }


    render () {

        let preload = null;
        if (this.state.loading) {
            preload = <Preload />;
        }
       

        return (
            <Aux>
                <div>
                    <PageHeader isHome={this.props.isHome}/>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                    <Exta />
                    <Footer />
                    {preload}
                </div>
            </Aux>
        )
    }
}

export default Layout;