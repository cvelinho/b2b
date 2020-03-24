// react
import React, { Component } from 'react';

// third-party
import { Helmet } from 'react-helmet';

// application
import SectionArticleList from './Sections/SectionArticleList';
import SectionQuickSearch from './Sections/SectionQuickSearch';
import SectionSearchMenu from './Sections/SectionSearchMenu';

import { Breadcrumb } from '../../components/shared/Breadcrumb';

export default class SearchPage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Search page</title>
                    <meta name="description" content="search description" />
                </Helmet>

                <div className="ekat__search">
                    <div className="ekat__quick-search">
                        <SectionQuickSearch />
                    </div>
                    <div className="ekat__search-container">
                        <div className="ekat__search-menu">
                            <SectionSearchMenu />
                        </div>
                        <div className="ekat__search-body">

                            <div className="search-body">

                                <section className="breadcrumb-section">
                                    <Breadcrumb />
                                </section>

                                <section className="search-section">
                                    <div className="search-main">
                                        <div className="banner-container">
                                            Left banner test
                                        </div>

                                        <div className="main-container">
                                            <div className="search__home search__container">
                                                <section className="home-articles_section">
                                                    <div className="home-articles_content">
                                                        <SectionArticleList />
                                                    </div>
                                                </section>
                                            </div>
                                        </div>

                                        <div className="banner-container">
                                            Right banner test
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}