import React, { Component } from 'react';
import Header from './Header/Header';
import PageHeaderContent from './Content/Content'

class PageHeader extends Component {

    render() {
        return (
            <section className="s-pageheader s-pageheader--home">
                <Header />
                <PageHeaderContent />
            </section>
        );
    }
}

export default PageHeader;