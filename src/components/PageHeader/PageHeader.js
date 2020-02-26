import React, { Component } from 'react';
import Header from './Header/Header';
import PageHeaderContent from './Content/Content'

class PageHeader extends Component {
    state = {
        isHome: true,
    }

    componentWillUpdate() {
        if(window.location.pathname != "/"){
            this.setState({ isHome: false });
        }
    }

    render() {
        let className = "s-pageheader";
        if (this.state.isHome) {
            className += " s-pageheader--home";
        }
        return (
            <section className={className}>
                <Header />
                {(this.state.isHome) ? <PageHeaderContent /> : null}
            </section>
        );
    }
}

export default PageHeader;