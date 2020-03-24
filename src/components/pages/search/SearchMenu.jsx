// react
import React, { Component } from 'react';

// third-party
import { NavLink } from 'react-router-dom';
import { IconClose20Svg } from '../../../content/images/svg';


export default class SearchMenu extends Component {

    constructor(props) {
        super();

        this.state = {
            changeSearchCallback: props.changeSearchCallback,
            selectedItem: props.menuItem
        };
    }

    renderMenuLinks = () => {
        const menuLinks = [
            { id: 1, icon: <IconClose20Svg />, title: "General search", url: 'search-general' },
            { id: 2, icon: <IconClose20Svg />, title: "Vehicle search", url: 'search-vehicles' },
            { id: 3, icon: <IconClose20Svg />, title: "Search by part name", url: 'search-generic-article' },
            { id: 4, icon: <IconClose20Svg />, title: "Criteria search", url: 'search-criterias' },
            { id: 5, icon: <IconClose20Svg />, title: "Search by manufacturer", url: 'search-manufacturer' },
            { id: 6, icon: <IconClose20Svg />, title: "Custom search", url: 'search-custom' },
            { id: 7, icon: <IconClose20Svg />, title: "Universal search", url: 'search-universal' },
            { id: 8, icon: <IconClose20Svg />, title: "Tyre search", url: 'search-tyre' }
        ];

        return (
            menuLinks.map((item, index, menuItem) => (
                <li key={item.url} className={this.state.selectedItem === menuItem ? "search-menu__item selected" : "search-menu__item"}>
                    <NavLink to={`/search/${item.url}`} exact activeClassName="selected">
                        <span>
                            {item.icon}
                            <span>
                                {item.title}
                            </span>
                        </span>
                    </NavLink>
                </li>
            ))
        );
    }

    render() {
        return (
            <div className="search-menu">
                <ul className="search-menu__list">
                    {this.renderMenuLinks()}
                </ul>
            </div>
        );
    }
}