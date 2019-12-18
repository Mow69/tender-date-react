import React, { Component } from "react";
import { getUsers } from "../services/UserService";
import Search from "../Utils/Search";
import UserList from "./UserList";
import {IUsersState} from "../../interfaces/IState";

interface IUsersProps {
    state: any,
    users: []
}
// TODO: Mettre les types et corriger cela dans ts les fichiers. cf https://github.com/ld-web/hoc-users-list/blob/master/src/components/User/Users.js
class Users extends Component<IUsersProps, IUsersState> {
    constructor(props: IUsersProps) {
        super(props);
        this.state = {
            userSearch: [],
            search: ""
        };
        this.props.users = [];
    }

    componentDidMount = () => {
        getUsers().then(users => {
            console.log(users)
            // this.props.users = users;
            this.setState({
                userSearch: users
            });
        });
    };

    search = e => {
        const search = e.target.value;
        let userSearch = this.props.users;

        if (search !== "") {
            userSearch = this.props.users.filter(user => user.name.includes(search));
        }

        this.setState({
            userSearch: userSearch,
            search: search
        });
    };

    render = () => {
        return (
            <>
                <Search handleChange={this.search} searchTerm={this.state.search} />
                <div className="row mt-2">
                    <UserList users={this.state.userSearch} />
                </div>
            </>
        );
    };
}

export default Users;
