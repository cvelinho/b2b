// react
import React, { Component } from 'react';

// third-party

// application

export class Breadcrumb extends Component {

    componentDidMount() {
        console.log("breadcrumb");
    };

    render() {
        return (
            <div className="breadcrumb">
                <ol className="breadcrumb__list">
                    <li className="breadcrumb__item">
                        <a>
                            Home
                        </a>
                    </li>
                    <li className="breadcrumb__item">
                        <a>
                            Home
                        </a>
                    </li>
                </ol>
                
            </div>
        );
    }
}