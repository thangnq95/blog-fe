import React, { Component } from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

class Header extends Component {
    state = {
        showSearchHeader: false,
        showToggleMenu: false
    }

    searchHeaderHandler = () => {
        this.setState((prevState) => {
            return { showSearchHeader: !prevState.showSearchHeader };
        });
    }
    searchHeaderClosedHandler = () => {
        this.setState({ showSearchHeader: false });
    }
    
    toggleMenuHandler = () => {
        this.setState((prevState) => {
            return { showToggleMenu: !prevState.showToggleMenu };
        });
    }
    toggleMenuClosedHandler = () => {
        this.setState({ showToggleMenu: false });
    }

    render() {
        let classesNew = "";
        if(this.state.showSearchHeader){
            classesNew = classesNew.concat(" search-is-visible");
        }
        if(this.state.showToggleMenu){
            classesNew = classesNew.concat(" nav-wrap-is-visible");
        }
        return (
            <header className={"header".concat(classesNew)}>
                <div className="header__content row">
                    <Logo />
                    <ul className="header__social">
                        <li>
                            <a href="#0"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fa fa-instagram" aria-hidden="true" /></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                        </li>
                    </ul> {/* end header__social */}
                    <a className="header__search-trigger" onClick={this.searchHeaderHandler} href="#0" />
                    <div className="header__search">
                        <form role="search" method="get" className="header__search-form" action="#">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="search-field" placeholder="Type Keywords" defaultValue name="s" title="Search for:" autoComplete="off" />
                            </label>
                            <input type="submit" className="search-submit" defaultValue="Search" />
                        </form>
                        <a href="#0" title="Close Search" className="header__overlay-close" onClick={this.searchHeaderClosedHandler}>Close</a>
                    </div>  {/* end header__search */}
                    <a className="header__toggle-menu" onClick={this.toggleMenuHandler} href="#0" title="Menu"><span>Menu</span></a>
                  
                    <nav className="header__nav-wrap">

                        <h2 className="header__nav-heading h6">Site Navigation</h2>
                        <NavigationItems />
                        <a href="#0" className="header__overlay-close close-mobile-menu" onClick={this.toggleMenuClosedHandler}>Close</a>
                    </nav>
                </div> {/* header-content */}
            </header>

        );
    }
}

export default Header;