import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import "./App.scss";
import {Login} from "./Login/Login";
import Users from "./User/Users";
import UserPage from "./User/UserPage";
import NotFound from "./NotFound";


function App() {
  return (
    <>
        <div className='main-container'>
          <Nav />
            <div className='title-container'>
            <h1>Tender Date</h1>
                <h2>Love me tender, darling</h2>
                <h3>Ready to take the plunge ?</h3>
                <Router>
                    <div>
                        <Switch>
                            {/*<Route path="/user/:id" component={UserPage} />*/}
                            {/*<Route exact path="/" component={Users} />*/}
                            <Route exact path="/" component={Login} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    </>
  );
}

export default App;
