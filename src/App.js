import React from "react";
import HomePage from './Pages/Homepage/Home.js';
import Login from './Pages/Login.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const loginHeader = () => {
    return (
        <div className="App-header">
            <div className="SiteTitle">
                The Vault
            </div>
        </div>
    )
}

const siteHeader = () => {
    return (
        <div className="App-header">
            <Link to="/login">
                <button className="LogOut">Log Out</button>
            </Link>
            <div className="SiteTitle">
                The Vault
            </div>
            <textarea className="SearchBar" rows="1" />
            <button className="Search">Search</button>
        </div>

    )
}

function App() {
    return (
        <html lang="en">
            <title>
                The Vault
            </title>
            <body>
                <div id="root">
                    <div className="App">
                        <Router>
                            <Route path="/home" render={() => siteHeader()} />
                            <Route path="/series" render={() => siteHeader()} />
                            <Route path="/login" render={() => loginHeader()} />
                            <div className="PageContentContainer">
                                <Route path="/home" render={() => HomePage()} />
                                <Route path="/login" render={() => Login()} />
                            </div>
                        </Router>
                    </div>
                </div>
            </body>
        </html>
    );
}






export default App;



