// react
import React, { Component } from 'react';

// third-party
import { Helmet } from 'react-helmet';

// application
import Footer from './../../footer';
import Header from './../../header';
import QuickSearch from './QuickSearch';
import SearchMenu from './SearchMenu';
import { Breadcrumb } from '../../shared/Breadcrumb';


export class SearchLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Drugi test</title>
                    <meta name="description" content="drugi test desc" />
                </Helmet>

                <div className="ekat__main">
                    <header className="ekat__header">
                        <Header />
                    </header>

                    <div className="ekat__body">
                        <div className="ekat__search">
                            <div className="ekat__quick-search">
                                <QuickSearch />
                            </div>
                            <div className="ekat__search-container">
                                <div className="ekat__search-menu">
                                    <SearchMenu />
                                </div>
                                <div className="ekat__search-body">
                                    <div className="search-body">
                                        <section className="breadcrumb-section">
                                            <Breadcrumb />
                                        </section>

                                        <section className="search-section">
                                            <div className="search-main">
                                                <div className="search__banner-container">
                                                    Left banner test
                                                </div>

                                                {/*
                                                // Return search pages: general search, vehicle search etc...
                                                */}
                                                {this.props.children}

                                                <div className="search__banner-container">
                                                    Right banner test
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="ekat__footer">
                        <Footer />
                    </footer>
                </div>                
            </React.Fragment>
        );
    }
}