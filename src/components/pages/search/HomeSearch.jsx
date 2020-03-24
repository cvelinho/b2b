// react
import React, { Component } from 'react';

import { HomeArticleList } from '../../shared/HomeArticleList';

export class HomeSearch extends Component {
    render() {
        return (
            <div className="search__home search__container">
                {/*
                // TODO: create filter, total results, list/grid view
                */}


                <section className="home-articles_section">
                    <div className="home-articles_content">
                        <HomeArticleList />
                    </div>
                </section>
            </div>
        );
    }
}