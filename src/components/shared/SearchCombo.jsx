// react
import React, { Component } from 'react';

// third-party
import { IconArrowDown20Svg, IconClose20Svg, IconSearchSvg } from '../../content/images/svg';


export class SearchCombo extends Component {
    constructor(props) {
        super();

        this.state = {
            comboLabel: props.comboLabel,
            comboInputWrapper: props.comboInputWrapper,
            comboSearchButton: props.comboSearchButton
        }
    }

    renderSearchCombo = () => {
        return (
            <div className="search-combo">
                <label className="search-combo__label">
                    {this.props.comboLabel}
                </label>
                <div className="search-combo__input-wrapper">
                    {this.props.comboInputWrapper}
                </div>
                
                {this.props.comboSearchButton}
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.renderSearchCombo()}
            </React.Fragment>
        );
    }
}