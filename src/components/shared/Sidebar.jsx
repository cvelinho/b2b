// react
import React, { Component } from 'react';

// third-party
import ReactDOM from 'react-dom';

export class Sidebar extends Component {
    constructor(props) {
        super();

        this.state = {
            name: props.name,
            show: props.show,
            onClose: props.onClose,
            children: props.children
        }
    }

    renderSidebarMenu = () => {
        const showHideClassName = this.state.show ? "sidebar sidebar-show" : "sidebar sidebar-fade";

        return (
            <div className={showHideClassName}>
                <div className="sidebar-header">
                    <h5 className="sidebar-title">
                        {this.props.sidebarTitle}
                    </h5>
                    <button type="button" onClick={this.state.onClose} className="sidebar-close btn">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="sidebar-body">
                    {this.state.children}
                </div>
                {/*<div className="sidebar-footer">
                    footer
                </div>*/}
            </div>
        );
    }

    renderSidebarCart = () => {
        const showHideClassName = this.state.show ? "sidebar sidebar-show" : "sidebar sidebar-fade";

        return (
            <div className={showHideClassName}>
                <div className="sidebar-header">
                    <h5 className="sidebar-title">
                        {this.props.sidebarTitle}
                    </h5>
                    <button type="button" onClick={this.state.onClose} className="sidebar-close btn">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="sidebar-body">
                    {this.state.children}
                </div>
            </div>
        );
    }

    render() {
        switch (this.state.name) {
            case "sidebar-menu":
                return (
                    ReactDOM.createPortal(this.renderSidebarMenu(), document.body)
                );
            case "sidebar-cart":
                return (
                    ReactDOM.createPortal(this.renderSidebarCart(), document.body)
                );
            default:
        }
    }
}