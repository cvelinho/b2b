// react
import React, { Component } from 'react';

// third-party
import { NavLink } from 'react-router-dom';

// data
import data from './../../data/data';

export class MenuLinks extends Component {
    render() {
        const menuLinks = data.MenuLinks.map((item, index) => (
            <li key={index} className="menu-links__item">
                <NavLink exact activeClassName="selected" to={item.url}>
                    <span>
                        {item.title}
                    </span>
                </NavLink>
            </li>
        ));

        return (
            <div className="menu-links">
                <ul className="menu-links__list">
                    {menuLinks}
                </ul>
            </div>
        );
    }
}