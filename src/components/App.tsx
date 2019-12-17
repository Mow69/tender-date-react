import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Users from "../components/User/Users";
import UserPage from "../components/User/UserPage";
import NotFound from "./NotFound";

//

class App extends Component {
  render = () => {
    return (
        <>
          <Nav />
          <div className="container">
            <Router>
              <div>
                <Switch>
                  <Route path="/user/:id" component={UserPage} />
                  <Route exact path="/" component={Users} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Router>
          </div>
        </>
    );
  };
}

// const App : React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
