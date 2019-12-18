import React, {Component} from 'react';
import logo from '../img/l5yNLnzI_400x400.jpg';

class Nav extends Component {
    render = () => (
        <nav className="uk-navbar-container uk-margin" uk-navbar>
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
                    <form action="javascript:void(0)">
                        <input className="uk-input uk-form-width-small" type="text" placeholder="Input"/>
                        <button className="uk-button uk-button-default">SEARCH</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
