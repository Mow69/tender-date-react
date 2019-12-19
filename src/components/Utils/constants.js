export const apiPlatformApiEndpoint = `${process.env.REACT_APP_API_ENTRYPOINT}/api`;
export const tokenName = 'front-user';
export const USER_ENDPOINT = `${apiPlatformApiEndpoint}/users`;

export const urls = {
    user: {
        login: '/login',
        logout: '/logout',
        list: '/users'
    }
};
