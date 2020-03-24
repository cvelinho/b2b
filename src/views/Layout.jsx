// react
import React, { Component } from 'react';

// third-party
import { Helmet } from 'react-helmet';

// application
import Header from './../components/header';
import Footer from './../components/footer';


// data stubs
import theme from '../data/theme';


export default class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{theme.name}</title>
                    <meta name="description" content={theme.fullName} />
                </Helmet>

                <div className="ekat__main">
                    <header className="ekat__header">
                        <Header />
                    </header>

                    <div className="ekat__body">
                        {this.props.children}
                    </div>

                    <footer className="ekat__footer">
                        <Footer />
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}