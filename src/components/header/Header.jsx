// react
import React, { Component } from 'react';

// third-party

// application
import { LogoPanel } from './LogoPanel';
import { NavPanel } from './NavPanel';

export class Header extends Component {
    render() {
        let bannerPanel;

        bannerPanel = (
            <div className="header__banner-panel">

            </div>
        );

        return (
            <div className="header">
                <div className="header__logo-panel">
                    <LogoPanel />
                </div>

                {bannerPanel}

                <div className="header__nav-panel">
                    <NavPanel />
                </div>
            </div>
        );
    }
}