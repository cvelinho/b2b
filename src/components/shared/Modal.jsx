// react
import React, { Component } from 'react';

// third-party
import ReactDOM from 'react-dom';
import { IconCross10Svg } from '../../content/images/svg';


export class Modal extends Component {
    constructor(props) {
        super();

        this.state = {
            name: props.name,
            show: props.show,
            modalTitle: props.modalTitle,
            children: props.children,
            modalFooter: props.modalFooter,
            onClose: props.onClose
        }
    }

    // Kill the scroll on the body
    componentDidMount() {
        document.body.classList.add("modal-open");
    }

    componentWillUnmount() {
        document.body.classList.remove("modal-open");
    }

    renderModal = () => {
        const showHideClassName = this.state.show ? "modal center modal-show" : "modal center modal-fade";
        
        return (
            <div className={showHideClassName}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {this.props.modalTitle}
                            </h5>
                            <button type="button" onClick={this.state.onClose} className="modal-close btn btn-light btn-sm btn-svg-icon">
                                <IconCross10Svg />
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <div>
                                <button onClick={this.state.onClose} className="btn btn-close">
                                    <span>
                                        Close
                                    </span>
                                </button>
                                <button onClick={this.state.onClose} className="btn btn-confirm">
                                    <span>
                                        Confirm
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderSmallModal = () => {
        const showHideClassName = this.state.show ? "modal center modal-show" : "modal center modal-fade";

        return (
            <div className={showHideClassName}>
                <div className="modal-dialog modal-dialog-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <div>
                                <button onClick={this.state.onClose} className="btn btn-close">
                                    <span>
                                        Close
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderRightSideModal = () => {
        const showHideClassName = this.state.show ? "modal right modal-show" : "modal right modal-fade";

        return (
            <div className={showHideClassName}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {this.props.modalTitle}
                            </h5>
                            <button type="button" onClick={this.state.onClose} className="modal-close btn btn-light btn-sm btn-svg-icon">
                                <IconCross10Svg />
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {this.props.modalFooter}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        switch (this.state.name) {
            case "modal":
                return (
                    ReactDOM.createPortal(this.renderModal(), document.body)
                );
            case "modal-sm":
                return (
                    ReactDOM.createPortal(this.renderSmallModal(), document.body)
                );
            case "modal-right":
                return (
                    ReactDOM.createPortal(this.renderRightSideModal(), document.body)
                );
            default:
        }
    }
}