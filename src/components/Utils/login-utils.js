import * as constants from './constants';

const login_uri = `${constants.apiPlatformApiEndpoint}/login_check`;

const login = (username, password) => {
    const request = new Request(`${login_uri}`, {
        method: 'POST',
        body: JSON.stringify({ username: username, password }),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    });

    return fetch(request);
}

export default login;