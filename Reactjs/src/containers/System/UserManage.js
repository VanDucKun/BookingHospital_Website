import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode == 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    
    /*
    life cycle - vong doi
    Run component:
    1.Run construct -> init state
    2.Did mount (set state) : state -> luu gia tri cac bien
    // mount = born , unmount = die
    3.Render (re-render)// render ra du lieu de nhin thay duoc
    */

    render() {
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <div className="title text-center">Manage users with Duc</div>
                <div className="mx-1">
                    <button className="btn btn-primary px-3"> <i className="fas fa-plus"></i>Add new users</button>
                </div>
                <div className="users-table mt-3 mx-1">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {
                            arrUsers && arrUsers.map((item, index) => {
                                console.log('Duc check map', item, index)
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn-edit"><i className = "fas fa-pencil-alt"></i></button>
                                            <button className="btn-delete"><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>)
                            })

                        }
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
