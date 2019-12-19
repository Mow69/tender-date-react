import React from 'react';

const UserContext = React.createContext({
  isLogged: false,
  setIsLogged: () => {},
  username: null,
  setUsername: () => {}
});

export default UserContext;