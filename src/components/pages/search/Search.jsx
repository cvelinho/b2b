// react
import React, { Component } from 'react';

// third-party
import { Helmet } from 'react-helmet';

// application
import QuickSearch from './QuickSearch';
import SearchMenu from './SearchMenu';
import { Breadcrumb } from '../../shared/Breadcrumb';
import { SearchCombo } from '../../shared/SearchCombo';

// pages
import { HomeSearch } from './HomeSearch';


export class Search extends Component {

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
                                        <div className="banner-container">
                                            Left banner test
                                        </div>
                                        
                                        <div className="main-container">
                                            
                                            <div className="search-filter">
                                                <div className="search-sorting">
                                                    <SearchCombo comboLabel="Sort by" />
                                                </div>

                                                <div className="filter">
                                                </div>
                                            </div>

                                            <div className="search-results">
                                                <div className="result-title">
                                                    <h1>
                                                        <span>
                                                            Total search results:
                                                        </span>
                                                        <span>
                                                            56
                                                        </span>
                                                    </h1>
                                                </div>
                                                <div className="search-view">
                                                    <div className="view__toggle-btn">
                                                        <button>
                                                            <span>List view</span>
                                                        </button>
                                                        <button>
                                                            <span>Grid view</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*
                                            // Home Search 
                                            */}
                                            <HomeSearch />

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