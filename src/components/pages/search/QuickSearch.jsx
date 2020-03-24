// react
import React, { Component } from 'react';

// third-party
import { IconMenuSvg, IconArrowDown20Svg, IconClose20Svg, IconSearchSvg } from '../../../content/images/svg';
import { SearchCombo } from '../../shared/SearchCombo';

// application

export default class QuickSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comboLabel: "",
            comboInputWrapper: "",
            comboSearchButton: ""
        }
    }

    comboLabel = () => {
        return (
            <React.Fragment>
                Quick search
            </React.Fragment>
        );
    }

    comboInputWrapper = () => {
        return (
            <React.Fragment>
                <input type="text" className="input-text" />
                <div className="search-combo__button-group">
                    <button className="button-reset">
                        <IconClose20Svg />
                        <span>
                            Reset
                        </span>
                    </button>
                    <button className="button-drop">
                        <IconArrowDown20Svg />
                        <span>
                            Drop
                        </span>
                    </button>
                </div>
            </React.Fragment>
        );
    }

    comboSearchButton = () => {
        return (
            <button className="search-combo__button btn btn-primary">
                <span className="btn-svg-icon">
                    <IconSearchSvg className="search__button-icon" />
                </span>
                <span>
                    Search
                </span>
            </button>
        );
    }

    render() {
        return (
            <div className="quick-search">
                <div className="quick-search__nav-bar">
                    <div className="quick-search__action-button">
                        <IconMenuSvg className="quick-search__button-icon" />
                    </div>
                    <div className="quick-search__form">
                        <SearchCombo comboLabel={this.comboLabel()} comboInputWrapper={this.comboInputWrapper()} comboSearchButton={this.comboSearchButton()} />
                    </div>
                    

                    {/*<div className="quick-search__form search-combo">
                        <label className="search-combo__label">
                            Quick search
                        </label>
                        <div className="search-combo__input-wrapper">
                            <input type="text" className="input-text" />
                            <div className="search-combo__button-group">
                                <button className="button-reset">
                                    <IconClose20Svg className="quick-search__button-icon" />
                                    <span>
                                        Reset
                                    </span>
                                </button>
                                <button className="button-drop">
                                    <IconArrowDown20Svg className="quick-search__button-icon" />
                                    <span>
                                        Drop
                                    </span>
                                </button>
                            </div>
                        </div>
                        <button className="search-combo__button btn btn-primary">
                            <span className="btn-svg-icon">
                                <IconSearchSvg className="quick-search__button-icon" />
                            </span>
                            <span>
                                Search
                            </span>
                        </button>
                    </div>*/}
                    <div className="quick-search__menu">

                    </div>
                </div>
            </div>
        );
    }
}