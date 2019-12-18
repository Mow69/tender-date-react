import React from 'react';
import Nav from "./Nav";
import "./App.scss";
import {Login} from "./Login/Login";

function App() {
  return (
    <>
        <div className='main-container'>
          <Nav />
          <h1>Tender Date</h1>
            <h2>Love me tender, darling</h2>
            <h3>Ready to take the plunge ?</h3>
            <Login />
        </div>
    </>
  );
}

export default App;
