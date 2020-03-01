import React, { Component } from 'react';
import Header from './Header/Header';
import PageHeaderContent from './Content/Content'

class PageHeader extends Component {
    
    render() {
        let className = "s-pageheader";
        if (this.props.isHome) {
            className += " s-pageheader--home";
        }
        return (
            <section className={className}>
                <Header />
                {(this.props.isHome) ? <PageHeaderContent /> : null}
            </section>
        );
    }
}

export default PageHeader;