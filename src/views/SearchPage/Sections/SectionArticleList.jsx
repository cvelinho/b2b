// react
import React, { Component } from 'react';

// third party
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IconShopCartSvg } from '../../../content/images/svg';

// data
import data from './../../../data/data';
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export default class SectionArticleList extends Component {
    constructor() {
        super();

        this.state = {
            hits: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        axios.get(API + DEFAULT_QUERY)
            .then(response => {
                this.setState({
                    hits: response.data.hits,
                    isLoading: false
                });
            }).catch(function (error) {
                console.log(error);
            });

        //fetch(API + DEFAULT_QUERY)
        //    .then(response => response.json())
        //    .then(data => this.setState({ hits: data.hits, isLoading: false }))
        //    .catch(error => this.setState({ error, isLoading: false }));
    }

    renderPreloadeBlock = () => {
        if (this.state.isLoading) {
            return <div>loader</div>;
        }
    }

    render() {
        const { isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        const homeOfferArticles = data.HomeOfferArticles.map((article, index) => (
            <li key={index} className="home-article__item">
                <h1 className="article_item-title">
                    <Link to={`/article/${article.id}`}>
                        <span className="article_manufacturer">
                            {article.manufacturer}
                        </span>
                        <span className="article_part-number">
                            {article.partNumber}
                        </span>
                        <span className="article_generic-article">
                            {article.genericArticle}
                        </span>
                    </Link>
                </h1>
                <div className="article_item-image">
                    <div className="article_image-content">
                        <img className="article_image" src={article.imageUrl} alt={article.manufacturer + ' - ' + article.partNumber} />
                    </div>
                </div>
                <div className="article_item-price">
                    <span className="article_new-price">
                        {article.price[0].newPrice + ' ' + article.currency}
                    </span>
                    <span className="article_old-price">
                        {article.price[0].oldPrice + ' ' + article.currency}
                    </span>
                </div>
                <div className="article_item-brands">
                    <div>
                        {article.brands}
                    </div>
                </div>
                <div className="article_item-button">
                    <button className="btn btn-primary">
                        <span className="btn-svg-icon">
                            <IconShopCartSvg className="" />
                        </span>

                        <span>
                            Order article
                            </span>
                    </button>
                </div>
            </li>
        ));

        return (
            <ul className="home-article__list">
                {homeOfferArticles}
                {/*
                 * 
                 * { this.state.hits.map(item => <li>{item.title}</li>) }
                 * 
                 * */}

                {/*
                {hits.map(hit =>
                    <li key={hit.objectID} className="home-article__item">
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
                */}
            </ul>
        );
    }
}