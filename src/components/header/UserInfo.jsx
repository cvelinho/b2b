// react
import React, { Component } from 'react';

// data
import data from './../../data/data';

export class UserInfo extends Component {
    render() {
        const userInfo = data.UserInformation.map((item, index) => (
            <React.Fragment key={index}>
                <div className="user-info__initial">
                    <span>{item.firstName}</span>
                    <span>{item.lastName}</span>
                </div>
                <div className="user-info__name-desc">
                    <span>{item.firstName} {item.lastName}</span>
                    <span>{item.userMode}</span>
                </div>
            </React.Fragment>
        ));

        return (
            <div className="user-info">
                {userInfo}
            </div>
        );
    }
}