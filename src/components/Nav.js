import React, {Component} from 'react';
import logo from '../img/l5yNLnzI_400x400.jpg';
import Search from "./Utils/Search";

class Nav extends Component {
    render = () => (
        <nav className="uk-navbar-container uk-margin">
            <div className="uk-navbar-left">
                <a className="uk-navbar-item uk-logo" href="#">
                    <img src={logo} alt="Love me tender"/>
                </a>

                <ul className="uk-navbar-nav">
                    <li>
                        <a href="#">
                            <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                            Users
                        </a>
                    </li>
                </ul>
                <div className="uk-navbar-item">
                    <div>Some <a href="#">Link</a></div>
                </div>
                <div className="uk-navbar-item">
                    <Search />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
