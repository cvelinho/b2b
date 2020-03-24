// react
import React, { Component } from 'react';

// third-party
import { IconAlertSvg, IconInformationSvg, IconLegendSvg } from '../../content/images/svg';

// pages
import { Modal } from './../shared/Modal';

export class NavIcons extends Component {
    constructor(props) {
        super(props);

        // information modal
        this.showInfoModal = this.showInfoModal.bind(this);
        this.hideInfoModal = this.hideInfoModal.bind(this);
        // news modal
        this.showNewsModal = this.showNewsModal.bind(this);
        this.hideNewsModal = this.hideNewsModal.bind(this);
        //legend modal
        this.showLegendModal = this.showLegendModal.bind(this);
        this.hideLegendModal = this.hideLegendModal.bind(this);

        this.state = {
            modalInfo: false,
            modalNews: false,
            modalLegend: false,
            modalFooter: ""
        }
    }

    // #region Modals
    showInfoModal = () => {
        this.setState({
            modalInfo: true
        });
    };
    hideInfoModal = () => {
        this.setState({
            modalInfo: false
        });
    };
    showNewsModal = () => {
        this.setState({
            modalNews: true
        });
    };
    hideNewsModal = () => {
        this.setState({
            modalNews: false
        });
    };
    showLegendModal = () => {
        this.setState({
            modalLegend: true
        });
    };
    hideLegendModal = () => {
        this.setState({
            modalLegend: false
        });
    };

    modalFooter = () => {
        return (
            <div>
                test
            </div>
        );
    }

    renderModal() {
        if (this.state.modalInfo) {
            return (
                <Modal name="modal-sm" show={this.state.modalInfo} onClose={this.hideInfoModal} modalTitle="Info">
                    <div>
                        <p>Info</p>
                    </div>
                </Modal>
            );
        } else if (this.state.modalNews) {
            return (
                <Modal name="modal-right" show={this.state.modalNews} onClose={this.hideNewsModal} modalTitle="News" modalFooter={this.modalFooter()}>
                    <div>
                        <p>News</p>
                        <p>Data</p>
                    </div>
                </Modal>
            );
        } else if (this.state.modalLegend) {
            return (
                <Modal name="modal" show={this.state.modalLegend} onClose={this.hideLegendModal} modalTitle="Legend">
                    <div>
                        <p>Legend</p>
                    </div>
                </Modal>
            );
        }
    }
    // #endregion
    
    render() {
        return (
            <React.Fragment>
                <div className="nav-icons">
                    <div>
                        <button onClick={this.showInfoModal} title="Information">
                            <span>
                                <IconInformationSvg />
                            </span>
                        </button>
                    </div>
                    <div>
                        <button onClick={this.showNewsModal} title="News">
                            <span>
                                <IconAlertSvg />
                            </span>
                        </button>
                    </div>
                    <div>
                        <button onClick={this.showLegendModal} title="News">
                            <span>
                                <IconLegendSvg />
                            </span>
                        </button>
                    </div>
                </div>

                {this.renderModal()}
            </React.Fragment>
        );
    }
}