import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import {NavLink } from 'react-router-dom';

const navigationItems = () => (
    <ul className="header__nav">

        <NavigationItem classed="current" link="/">Home</NavigationItem>
       
        <li className="has-children">
            <NavLink to="#0" exact >Categories</NavLink>
            <ul className="sub-menu">
                <NavigationItem  link="/lifestyle">Lifestyle</NavigationItem>
                <NavigationItem  link="/health">Health</NavigationItem>
                <NavigationItem  link="/family">Family</NavigationItem>
                <NavigationItem  link="/management">Management</NavigationItem>
                <NavigationItem  link="/travel">Travel</NavigationItem>
                <NavigationItem  link="/work">Work</NavigationItem>
            </ul>
        </li>
        <li className="has-children">
            <NavLink to="#0" exact >Blog</NavLink>
            <ul className="sub-menu">
                <NavigationItem  link="/single-video">Video Post</NavigationItem>
                <NavigationItem  link="/single-audio">Audio Post</NavigationItem>
                <NavigationItem  link="/single-gallery">Gallery Post</NavigationItem>
                <NavigationItem  link="/single-standard">Standard Post</NavigationItem>
            </ul>
        </li>
        <NavigationItem  link="/style-guide">Styles</NavigationItem>
        <NavigationItem  link="/about">About</NavigationItem>
        <NavigationItem  link="/contact">Contact</NavigationItem>
    </ul>

);

export default navigationItems;

