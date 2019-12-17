import React, { Component } from "react";
import User from "./User";
import {IUserListProps} from "../../interfaces/IProps";


class UserList extends Component<IUserListProps, {}> {
    render = () => {
        const { users } = this.props;
        return users.map(user => (
            <User id={user.id} name={user.name} email={user.email} key={user.id} />
        ));
    };
}

export default UserList;
