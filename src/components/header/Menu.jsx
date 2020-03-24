// react
import React, { Component } from 'react';

// third-party
import { IconMenuDotsSvg } from '../../content/images/svg';

// pages
import { Modal } from '../shared/Modal';
import { MenuLinks } from './MenuLinks';

export class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.showSidebarMenu = this.showSidebarMenu.bind(this);
        this.hideSidebarMenu = this.hideSidebarMenu.bind(this);
       
        this.state = {
            sidebarInfo: false
        }
    }

    showSidebarMenu = () => {
        this.setState({
            sidebarInfo: true
        });
    }

    hideSidebarMenu = () => {
        this.setState({
            sidebarInfo: false
        });
    }

    renderSidebarMenu() {
        if (this.state.sidebarInfo) {
            return (
                <Modal name="modal-right" show={this.state.sidebarInfo} onClose={this.hideSidebarMenu}>
                    <MenuLinks />
                </Modal>
            );
        }
    }

    render() {
        return (
            <div className="menu">
                <button className="menu__button" onClick={this.showSidebarMenu} title="Menu">
                    <span>
                        <IconMenuDotsSvg className="menu__button-icon" />
                    </span>
                </button>

                {this.renderSidebarMenu()}
            </div>
        );
    }
}