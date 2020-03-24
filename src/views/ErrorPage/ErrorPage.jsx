// react
import React, { Component } from 'react';

// third-party
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


export default class ErrorPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="block">
                    <Helmet>
                        <title>404 Page Not Found</title>
                    </Helmet>

                    <div className="container">
                        <div className="not-found">
                            <div className="not-found__404">
                                Oops! Error 404
                            </div>

                            <div className="not-found__content">
                                <h1 className="not-found__title">Page Not Found</h1>

                                <p className="not-found__text">
                                    We can&apos;t seem to find the page you&apos;re looking for.
                                </p>

                                <Link to="/" className="btn btn-secondary btn-sm">Go To Home Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}