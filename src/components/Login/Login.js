import React, { useState, useContext } from "react";
import useForm from "react-hook-form";
import {DoubleBounce} from "better-react-spinkit";

import login from "../../components/Utils/login-utils";
import LoginErrors from './LoginErrors';
import UserContext from "../../components/context/UserContext";
import { tokenName } from '../../components/Utils/constants.js';
// import "./Login.scss";


const Login = () => {

    const {register, errors, setError, handleSubmit} = useForm();
    const [loading, setLoading] = useState(false);

    const user = useContext(UserContext);
    console.log('UserContext in Login component', user);

    const connect = data => {
        setLoading(true);

        login(data.login, data.password)
            .then(response => {
                if (response.status < 200 || response.status >= 300)
                    throw new Error(response);

                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem(tokenName, token);
                user.setIsLogged(true);
                setLoading(false);
            })
            .catch(e => {
                setLoading(false);
                user.setIsLogged(false);
                setError("apiServer", "connection", "Une erreur est survenue");
            });
    };


    return (
        <>
            <div className="connection-form-container">
                <form
                    onSubmit={handleSubmit(connect)}
                    method="POST"
                    id="connexion-form"
                >
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <LoginErrors errors={errors}/>
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                            <label htmlFor="login">Login</label>
                            <input
                                type="email"
                                className="uk-input"
                                name="login"
                                placeholder="Mail"
                                id="login"
                                ref={register({required: true})}
                            />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="uk-input"
                                name="password"
                                placeholder="Password"
                                ref={register({required: true})}
                            />
                        </div>
                    </div>
                    <div className="uk-text-center uk-margin-top">
                        {loading && (
                            <div className="uk-flex uk-flex-center">
                                <DoubleBounce/>
                            </div>
                        )}
                        {!loading && (
                            <button
                                id="connexion-button"
                                className="uk-button uk-button-default"
                                type="submit"
                                disabled={loading}
                            >
                                Sign in
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
};

export default Login;

