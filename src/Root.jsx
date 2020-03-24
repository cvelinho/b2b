// react
import React, { Component } from 'react';

// third-party
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

// application
import AppRoute from './AppRoute';

// views
import Layout from './views/Layout';
//import SearchLayout from './SearchLayout';
import SearchPage from './views/SearchPage/SearchPage';

//import { SearchCriterias } from './pages/search/search-criterias/SearchCriterias';
//import { SearchCustom } from './pages/search/search-custom/SearchCustom';
import SearchGeneral from './views/SearchPage/SearchGeneral/SearchGeneral';
//import { SearchGenericArticle } from './pages/search/search-generic-article/SearchGenericArticle';
//import { SearchManufacturer } from './pages/search/search-manufacturer/SearchManufacturer';
//import { SearchTyre } from './pages/search/search-tyre/SearchTyre';
//import { SearchUniversal } from './pages/search/search-universal/SearchUniversal';
//import { SearchVehicles } from './pages/search/search-vehicles/SearchVehicles';

import OrdersPage  from './views/OrdersPage/OrdersPage';
import OptionsPage from './views/OptionsPage/OptionsPage';

//import { Article } from './pages/article/Article';

import ErrorPage  from './views/ErrorPage/ErrorPage';


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
                    <AppRoute exact path="/search" component={SearchPage} layout={Layout} />

                    {/*
                    // Search pages
                    */}
                    <AppRoute exact path='/search/search-general' component={SearchGeneral} layout={Layout} />

                    {/*
                     * 
                     <AppRoute exact path='/search/search-criterias' component={SearchCriterias} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-custom' component={SearchCustom} layout={SearchLayout} />
                    
                    <AppRoute exact path='/search/search-generic-article' component={SearchGenericArticle} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-manufacturer' component={SearchManufacturer} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-tyre' component={SearchTyre} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-universal' component={SearchUniversal} layout={SearchLayout} />
                    <AppRoute exact path='/search/search-vehicles' component={SearchVehicles} layout={SearchLayout} />
                    */}

                    {/*
                    // Orders
                    */}
                    <AppRoute exact path="/orders" component={OrdersPage} layout={Layout} />

                    {/*
                    // Options
                    */}
                    <AppRoute exact path="/options" component={OptionsPage} layout={Layout} />

                    {/*
                    // Article 
                    */}
                    {/*<AppRoute exact path="/article/:id" component={() => (<Article />)} layout={SearchLayout}/>*/}

                    {/*
                    // Page Not Found
                    */}
                    <AppRoute exact path="/site/not-found" component={ErrorPage} layout={Layout} />
                    <AppRoute component={ErrorPage} layout={Layout} />
                </Switch>
            </BrowserRouter>
        );
    }
}