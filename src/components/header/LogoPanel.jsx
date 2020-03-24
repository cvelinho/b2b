// react
import React, { Component } from 'react';

// third-party
import { Link } from 'react-router-dom';

// data
import data from './../../data/data';

export class LogoPanel extends Component {
    render() {
        const logoPanel = data.Logo.map((logo, index) => (
            <Link key={index} to="/" className="logo_link">
                <span className="logo_name">
                    {logo.name}
                </span>
                <span className="logo_name-mode">
                    {logo.mode}
                </span>
            </Link>
        ));

        return (
            <React.Fragment>
                <div className="logo-panel">
                    {logoPanel}
                </div>
            </React.Fragment>
        );
    }
}