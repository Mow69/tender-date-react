# Front-end React 16.12.0

## Installation

On suit les [instructions de la documentation](https://create-react-app.dev/docs/getting-started/) officielle, en utilisant la commande `npx` :

`npx create-react-app hoc-dating`

On ajoute ensuite le support de SASS, et la librairie UIKit :

`yarn add node-sass uikit`

On renomme nos fichiers CSS en SCSS et on met à jour les imports de ces fichiers dans les fichiers Javascript correspondants.

>Fichier : index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// Pour utiliser les icônes UIKit
// https://github.com/uikit/uikit/issues/2229#issuecomment-398972606
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));

//...
```

On va ensuite ajouter les dépendances suivantes :

`yarn add better-react-spinkit react-hook-form react-router-dom axios`

|Nom|Description|
|---|-----------|
|[better-react-spinkit](http://better-react-spinkit.benjamintatum.com/)|Permettra d'afficher des spinners à l'écran pour les temps d'attente|
|[react-hook-form](https://react-hook-form.com/)|Gestion de formulaires|
|[react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)|Gestion du routage vers les différents composants|
|[axios](https://github.com/axios/axios)|Pour effectuer nos requêtes vers l'API|

## Formulaire de login

>Avant de réaliser le formulaire de login et de récupérer le token fourni par l'API, [assurez-vous que l'authentification fonctionne dans votre API](https://github.com/ld-web/hoc-dating-api#authentification--jwt).

### Structure du composant

> Fichier : src/components/Login/Login.js

```javascript
import React, { useState, useContext } from "react";
import useForm from "react-hook-form";
import { DoubleBounce } from "better-react-spinkit";

import login from "../../utils/login-utils";
import LoginErrors from './LoginErrors';

import logo from "../../images/logo.jpg";
import bg from "../../images/login-bg.jpg";
import "./Login.scss";

const Login = () => {
  // https://react-hook-form.com/get-started
  const { register, errors, setError, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const connect = data => {
    setLoading(true);

    login(data.login, data.password)
      .then(response => {
        if (response.status < 200 || response.status >= 300)
          throw new Error(response);

        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem("front-user", token);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        user.setLogged(true);
        // https://react-hook-form.com/api#setError
        setError("apiServer", "connection", "Une erreur est survenue");
      });
  };

  return (
    //...Contenu du formulaire...
  );
};

export default Login;

```

Le composant de login tire parti des éléments fournis par le hook `useForm` du package `react-hook-form`.

On introduit une variable d'état `loading` avec le hook `useState`. Ceci nous permettra de mettre l'utilisateur en attente pendant la requête d'authentification vers l'API.

La méthode `login` a été déplacée vers une couche de service :

> Fichier : src/utils/login-utils.js

```javascript
import * as constants from './constants';

// constants.apiPlatformApiEndpoint se base sur une variable d'environnement
// https://create-react-app.dev/docs/adding-custom-environment-variables/
const login_uri = `${constants.apiPlatformApiEndpoint}/login_check`;

const login = (username, password) => {
    const request = new Request(`${login_uri}`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    });

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    return fetch(request);
}

export default login;
```

En retournant la promesse renvoyée par `fetch`, on peut donc chaîner les appels à la méthode `then` pour le traitement des données.

La méthode `catch` va quant à elle injecter une erreur dans le formulaire, en cas de problème.
