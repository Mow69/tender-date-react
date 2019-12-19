import React, { useState } from "react";

import Login from "./Login";
import UserContext from "../context/UserContext";
import { tokenName, urls } from "../utils/constants.js";
import { Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../utils/PrivateRoute";
import history from "../utils/history";

import DefaultPage from "./DefaultPage";
import Users from "./Users";

function App() {
  // Je vérifie l'existence d'un token dans le localStorage
  // Comme ça, quand j'arrive sur l'application, je peux vérifier directement si on a de quoi vérifier la connexion de l'utilisateur
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem(tokenName) !== null
  );
  // Mon username contiendra le login de l'utilisateur connecté
  // On va le récupérer via l'API, ceci nous permettra de vérifier que l'utilisateur a un token valide et non expiré
  const [username, setUsername] = useState(null);

  // useEffect(() => {
  //   if (isLogged) {

  //   }
  // }, [isLogged]);

  return (
    <UserContext.Provider
      value={{ isLogged, setIsLogged, username, setUsername }}
    >
      <Router history={history}>
        <div>
          <Switch>
            <PrivateRoute exact path={urls.user.list} component={Users} />

            <Route exact path={urls.user.login} component={Login} />
            <Route exact path="/" component={DefaultPage} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
