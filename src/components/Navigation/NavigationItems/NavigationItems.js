import React, { Component } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';

class NavigationItems extends Component {

    state = {
        showSubMenuCategory: false,
        showSubMenuBlog: false,
    }

    showSubMenusHandler = (type) => {
        switch (type) {
            case "category":
                this.setState((prevState) => {
                    return {
                        showSubMenuCategory: !prevState.showSubMenuCategory,
                        showSubMenuBlog: false
                    };
                });
                break;

            case "blog":
                this.setState((prevState) => {
                    return {
                        showSubMenuCategory: false,
                        showSubMenuBlog: !prevState.showSubMenuBlog
                    };
                });
                break;
            default: break;
        }

    }


    render() {
        return (
            <ul className="header__nav">

                <NavigationItem classed="current" link="/">Home</NavigationItem>

                <li className="has-children">
                    <NavLink to="#0" className={this.state.showSubMenuCategory?"sub-menu".concat("-is-open"):""} exact onClick={()=>this.showSubMenusHandler("category")}>Categories</NavLink>
                    <ul className="sbu-menu" style={{ display: this.state.showSubMenuCategory ? "block" : "" }}>
                        <NavigationItem link="/lifestyle">Lifestyle</NavigationItem>
                        <NavigationItem link="/health">Health</NavigationItem>
                        <NavigationItem link="/family">Family</NavigationItem>
                        <NavigationItem link="/management">Management</NavigationItem>
                        <NavigationItem link="/travel">Travel</NavigationItem>
                        <NavigationItem link="/work">Work</NavigationItem>
                    </ul>
                </li>
                <li className="has-children">
                    <NavLink to="#0" className={this.state.showSubMenuBlog?"sub-menu".concat("-is-open"):""} exact onClick={()=>this.showSubMenusHandler("blog")}>Blog</NavLink>
                    <ul className="sub-menu" style={{ display: this.state.showSubMenuBlog ? "block" : "" }}>
                        <NavigationItem link="/single-video">Video Post</NavigationItem>
                        <NavigationItem link="/single-audio">Audio Post</NavigationItem>
                        <NavigationItem link="/single-gallery">Gallery Post</NavigationItem>
                        <NavigationItem link="/single-standard">Standard Post</NavigationItem>
                    </ul>
                </li>
                <NavigationItem link="/style-guide">Styles</NavigationItem>
                <NavigationItem link="/about">About</NavigationItem>
                <NavigationItem link="/contact">Contact</NavigationItem>
            </ul>
        );
    }
}


export default NavigationItems;

