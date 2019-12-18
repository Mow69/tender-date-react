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
|better-react-spinkit|Permettra d'afficher des spinners à l'écran pour les temps d'attente|
|react-hook-form|Gestion de formulaires|
|react-router-dom|Gestion du routage vers les différents composants|
|axios|Pour effectuer nos requêtes vers l'API|
