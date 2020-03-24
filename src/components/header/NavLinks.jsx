// react
import React, { Component } from 'react';

// third-party
import { NavLink } from 'react-router-dom';

// data
import data from './../../data/data';

export class NavLinks extends Component {
    render() {
        const navLinks = data.NavLinks.map((item, index) => (
            <li key={index} className="nav-links__item">
                <NavLink exact activeClassName="selected" to={item.url}>
                    <span>
                        {item.title}
                    </span>
                </NavLink>
                
                {item.sublist.length ?
                    <div className="nav-sublist">
                        <ul>
                            {item.sublist.map((sublist, subindex) => (
                                <li key={subindex}>
                                    <NavLink exact to={sublist.url}>
                                        <span>
                                            {sublist.title}
                                        </span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    : ""
                }
            </li>
        ));

        return (
            <div className="nav-links">
                <ul className="nav-links__list">
                    {navLinks}
                </ul>
            </div>
        );
    }
}