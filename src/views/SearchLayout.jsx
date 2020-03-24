// react
import React, { Component } from 'react';

// third-party
import { Helmet } from 'react-helmet';

// application
import Header from 'component/header/header';
import Footer from 'components/footer/footer';

import QuickSearch from './pages/search/QuickSearch';
import SearchMenu from './pages/search/SearchMenu';

// pages
import { IndexSearch } from './pages/search/IndexSearch';
import { SearchCriterias } from './pages/search/search-criterias/SearchCriterias';
import { SearchCustom } from './pages/search/search-custom/SearchCustom';
import { SearchGeneral } from './pages/search/search-general/SearchGeneral';
import { SearchGenericArticle } from './pages/search/search-generic-article/SearchGenericArticle';
import { SearchManufacturer } from './pages/search/search-manufacturer/SearchManufacturer';
import { SearchTyre } from './pages/search/search-tyre/SearchTyre';
import { SearchUniversal } from './pages/search/search-universal/SearchUniversal';
import { SearchVehicles } from './pages/search/search-vehicles/SearchVehicles';

// data stubs
import theme from '../data/theme';


export default class SearchLayout extends Component {

    constructor() {
        super();
        this.state = {
            currentSearch: 0
        };
    }

    renderCurrentSearch = () => {
        switch (this.state.currentSearch) {
            case 0:
                return <IndexSearch />;
            case 1:
                return <SearchGeneral />;
            case 2:
                return <SearchVehicles />;
            case 3:
                return <SearchGenericArticle />;
            case 4:
                return <SearchCriterias />;
            case 5:
                return <SearchManufacturer />;
            case 6:
                return <SearchCustom />;
            case 7:
                return <SearchUniversal />;
            case 8:
                return <SearchTyre />;
            default:
        }
    }

    changeSearchCallback = (id) => {
        this.setState({ currentSearch: id });
    }

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
                        <div className="ekat-search">
                            <div className="ekat-search__quick-search">
                                <QuickSearch />
                            </div>
                            <div className="ekat-search__main">
                                <div className="ekat-search__menu">
                                    <SearchMenu changeSearchCallback={this.changeSearchCallback} />
                                </div>
                                <div className="ekat-search__body">
                                    <div className="search-body">
                                        <div className="search_left-column search_banner-content">
                                            Left banner
                                        </div>
                                        <div className="search_main">
                                            {/*
                                             // TODO: need some logic here
                                             // render partial views for article search, article item etc..
                                             */}

                                            {this.props.children}

                                            {this.renderCurrentSearch()}
                                        </div>
                                        <div className="search_right-column search_banner-content">
                                            Right banner
                                        </div>
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