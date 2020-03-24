// react
import React, { Component } from 'react';

// third-party
import { IconCross10Svg, IconShopCartSvg } from '../../content/images/svg';
import { Link } from 'react-router-dom';

// application
import { Modal } from '../shared/Modal';
//import { Sidebar } from '../shared/Sidebar';
//import { Indicator } from './Indicator';

export class IndicatorCart extends Component {
    constructor(props) {
        super(props);

        this.showSidebarIndicator = this.showSidebarIndicator.bind(this);
        this.hideSidebarIndicator = this.hideSidebarIndicator.bind(this);

        this.state = {
            sidebarBasket: false
        }
    }

    showSidebarIndicator = () => {
        this.setState({
            sidebarBasket: true
        });
    }

    hideSidebarIndicator = () => {
        this.setState({
            sidebarBasket: false
        });
    }

    renderSidebarBasket = () => {
        if (this.state.sidebarBasket) {
            return (
                <Modal name="modal-right" show={this.state.sidebarBasket} onClose={this.hideSidebarIndicator} modalTitle="Shop cart" modalFooter={this.renderCartButtons()}>
                    {/*<Indicator />*/}
                    <div className="dropcart">
                        <div className="dropcart__products-list">
                            {this.renderCartProduct()}
                        </div>
                        {this.renderCartTotals()}
                    </div>
                </Modal>
            );
        }
    }

    // #region CART PRODUCTS
    renderCartProduct = () => {
        const products = [
            {
                id: 1, image: "http://images.local.automarket.rs/Common/images/no_image170.jpg", title: "Agip", manufacturer: "Agip", articleNumber: "123", description: "Zadnja vrata(Karoserija)", price: "10.00", quantity: "9,999", currency: "RSD"
            },
            {
                id: 2, image: "", title: "Agip", manufacturer: "Agip", articleNumber: "123", description: "Zadnja vrata(Karoserija)", price: "10.00", quantity: "9,999", currency: "RSD"
            },
            {
                id: 3, image: "http://images.local.automarket.rs/Common/images/no_image170.jpg", title: "Agip", manufacturer: "Agip", articleNumber: "123", description: "Zadnja vrata(Karoserija)", price: "10.00", quantity: "9,999", currency: "RSD"
            },
            {
                id: 4, image: "http://images.local.automarket.rs/Common/images/no_image170.jpg", title: "Agip", manufacturer: "Agip", articleNumber: "123", description: "Zadnja vrata(Karoserija)", price: "10.00", quantity: "9,999", currency: "RSD"
            },
            {
                id: 5, image: "", title: "Agip", manufacturer: "Agip", articleNumber: "123", description: "Zadnja vrata(Karoserija)", price: "10.00", quantity: "9,999", currency: "RSD"
            }
        ];

        const productItem = products.map((item, index) => {
            let description;
            let image;

            if (item.description) {
                description = (
                    <ul key={index} className="dropcart__product-options">
                        <li>
                            {item.description}
                        </li>
                    </ul>
                );
            }

            if (item.image.length) {
                image = (
                    <div className="dropcart__product-image">
                        <Link to={`/product/${item.id}`}>
                            <img src={item.image} alt={item.manufacturer + ', ' + item.articleNumber} title={item.manufacturer + ', ' + item.articleNumber} />
                        </Link>
                    </div>
                );
            }

            const removeButton = (
                <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                    <IconCross10Svg />
                </button>
            );

            return (
                <div key={index} className="dropcart__product">
                    {image}

                    <div className="dropcart__product-info">
                        <div className="dropcart__product-name">
                            <Link to={`/${item.id}`}>
                                {item.manufacturer} - {item.articleNumber}
                            </Link>
                        </div>
                        {description}
                        <div className="dropcart__product-meta">
                            <span className="dropcart__product-quantity">{item.quantity}</span>
                            {' x '}
                            <span className="dropcart__product-price">{item.price} {item.currency}</span>
                        </div>
                    </div>

                    {removeButton}
                </div>
            );
        });

        return (
            <React.Fragment>
                {productItem}
            </React.Fragment>
        );
    }

    renderCartTotals = () => {
        return (
            <div className="dropcart__totals">
                <table>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td>$1968.00</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>$25.00</td>
                        </tr>
                        <tr>
                            <th>Tax</th>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>$1993.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    renderCartButtons = () => {
        return (
            <div className="dropcart__buttons">
                <Link className="btn btn-reset" to="/shop/cart">Reset basket</Link>
                <Link className="btn btn-confirm" to="/shop/checkout">Go to basket</Link>
            </div>
        );
    }
    // #endregion

    render() {
        return (
            <div className="indicator-cart">
                <button className="indicator__button" onClick={this.showSidebarIndicator}>
                    <span className="indicator__area">
                        <IconShopCartSvg />
                        <span className="indicator__value">
                            10
                        </span>
                    </span>
                </button>

                {this.renderSidebarBasket()}
            </div>
        );
    }
}