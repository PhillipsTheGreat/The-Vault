import React from "react";
import HomePage from './Pages/Homepage/Home.js';
import Login from './Pages/Login.js';
import SeriesTemplate from './Pages/SeriesTemplate.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const loginHeader = () => {
    return (
        <div className="Login-header">
            <div className="LoginTitle">
                The Vault
            </div>
        </div>
    )
}

const siteHeader = () => {
    return (
        <div className="App-header">
            <div>
                <Link to="/login">
                    <button className="LogOut">Log Out</button>
                </Link>
            </div>
            <Link to="/home">
                <div className="SiteTitle">
                    The Vault
                </div>
            </Link>
            <div className="SearchContainer">
                <textarea className="SearchBar" rows="1" />
                <button className="SearchButton">Search</button>
            </div>
        </div>
    )
}

// const customScrollbar = () => {
//     return (
//         <div className="ScrollContainer">
//             <div className="ScrollBar"></div>
//             <span className="Spacer"></span>
//         </div>
//     )
// }

export default function App() {
    return (
        <html lang="en">
            <title>
                The Vault
            </title>
            <body className="Body">
                <div id="root">
                    <div className="App">
                        <Router>
                            <Route path="/home" render={() => siteHeader()} />
                            {/* <Route path="/home" render={() => customScrollbar()} /> */}
                            <Route path="/series" render={() => siteHeader()} />
                            {/* <Route path="/series" render={() => customScrollbar()} /> */}
                            <Route path="/login" render={() => loginHeader()} />
                            <Route exact path="/" render={() => loginHeader()} />
                            <div className="PageContentContainer">
                                <Route path="/home" render={() => HomePage()} />
                                <Route path="/series" render={() => SeriesTemplate()} />
                                <Route path="/login" render={() => Login()} />
                                <Route exact path="/" render={() => Login()} />
                            </div>
                        </Router>
                    </div>
                </div>
            </body>
        </html>
    );
}



