import React from "react";

export const Login = ({ name, email }) => (
    <>
        <div className="connection-form-container">
            <form
                method="POST"
                id="connexion-form"
            >
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="uk-input"
                            name="email"
                            placeholder="Mail"
                            onSubmit="validateMail()"
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
                        />
                    </div>
                </div>
                <button
                    id="connexion-button"
                    className="uk-button uk-button-default"
                    type="submit"
                >
                    Connection
                </button>
            </form>
        </div>
    </>
);


