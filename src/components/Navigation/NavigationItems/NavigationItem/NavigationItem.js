import React from 'react';
import {NavLink } from 'react-router-dom';

const navigationItem = ( props ) => (
    <li className={props.classes}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={props.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;