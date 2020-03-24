// react
import React, { Component } from 'react';

// application
import { NavLinks } from './NavLinks';
import { NavIcons } from './NavIcons';
import { UserInfo } from './UserInfo';
import { IndicatorCart } from './IndicatorCart';
import { DropdownLanguage } from './DropdownLanguage';
import { Menu } from './Menu';

export class NavPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="nav-panel">
                    <div className="nav-panel__nav-links">
                        <NavLinks />
                    </div>

                    <div className="nav-panel__nav-icons">
                        <NavIcons />
                    </div>

                    <div className="nav-panel__user-info">
                        <UserInfo />
                    </div>

                    <div className="nav-panel__indicator-cart">
                        <IndicatorCart />
                    </div>

                    <div className="nav-panel__dropdown-language">
                        <DropdownLanguage />
                    </div>

                    <div className="nav-panel__menu">
                        <Menu />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}