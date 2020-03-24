// react
import React, { Component } from 'react';

// third-party
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

// pages
import AppRoute from './AppRoute';
import { Layout } from './Layout';
import { SearchLayout } from './pages/search/SearchLayout';

import { Search } from './pages/search/Search';
import { SearchCriterias } from './pages/search/search-criterias/SearchCriterias';
import { SearchCustom } from './pages/search/search-custom/SearchCustom';
import { SearchGeneral } from './pages/search/search-general/SearchGeneral';
import { SearchGenericArticle } from './pages/search/search-generic-article/SearchGenericArticle';
import { SearchManufacturer } from './pages/search/search-manufacturer/SearchManufacturer';
import { SearchTyre } from './pages/search/search-tyre/SearchTyre';
import { SearchUniversal } from './pages/search/search-universal/SearchUniversal';
import { SearchVehicles } from './pages/search/search-vehicles/SearchVehicles';

import { Orders } from './pages/orders/Orders';
import { Options } from './pages/options/Options';

import { Article } from './pages/article/Article';

import SitePageNotFound from './pages/site/SitePageNotFound';


export default class Root extends Component {
    componentDidMount() {
        setTimeout(() => {
            const preloader = document.querySelector('.site-preloader');

            preloader.addEventListener('transitionend', (event) => {
                if (event.propertyName === 'opacity') {
                    preloader.parentNode.removeChild(preloader);
                }
            });
            preloader.classList.add('site-preloader__fade');
        }, 500);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to="/search" />} />

                    {/* 
                    // Home Search
                    */}
                    <AppRoute exact path="/search" component={Search} layout={Layout} />

                    {/*
                    // Search pages
                    */}
                    <AppRoute exact path='/search/search-criterias' component={SearchCriterias} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-custom' component={SearchCustom} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-general' component={SearchGeneral} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-generic-article' component={SearchGenericArticle} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-manufacturer' component={SearchManufacturer} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-tyre' component={SearchTyre} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-universal' component={SearchUniversal} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-vehicles' component={SearchVehicles} layout={SearchLayout} />

                    {/*
                    // Orders
                    */}
                    <AppRoute exact path="/orders" component={Orders} layout={Layout} />

                    {/*
                    // Options
                    */}
                    <AppRoute exact path="/options" component={Options} layout={Layout} />

                    {/*
                    // Article 
                    */}
                    <AppRoute exact path="/article/:id" component={() => (<Article />)} layout={SearchLayout}/>

                    {/*
                    // Page Not Found
                    */}
                    <AppRoute exact path="/site/not-found" component={SitePageNotFound} layout={Layout} />
                    <AppRoute component={SitePageNotFound} layout={Layout} />
                </Switch>
            </BrowserRouter>
        );
    }
}