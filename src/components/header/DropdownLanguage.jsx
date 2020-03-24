// react
import React, { Component } from 'react';

// third-party
import { Link } from 'react-router-dom';

// application

export class DropdownLanguage extends Component {
    render() {
        return (
            <div className="dropdown-language">
                <dl>
                    <dt className="sr">
                        <Link to="">
                            <span className="language-flag"></span>
                        </Link>
                    </dt>
                    <dd>
                        <ul>
                            <li className="ba">
                                <Link to="">
                                    <span className="language-flag"></span>
                                </Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
        );
    }
}
