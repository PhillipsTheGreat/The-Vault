import React, { Component } from "react";
import './Login.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Image from "./Images/DanmachiCover.jpg";


function Login() {


  return (
    <html lang="en">
      <title>
        The Vault
      </title>
      <body>
        <div id="root">
          <div className="Page">
            <div className="App">
              <div className="App-header">
                <div className="title">
                  The Vault
                </div>
              </div>
              <div className="Main">
                <div className="Login">
                  <textarea className="Username" rows="1" placeholder="Username" />
                  <Router>
                    <Link to="/home">
                      <button className="Enter">Enter The Vault</button>
                    </Link>
                    <Route path="/home" component={HomePage} />
                  </Router>
                  <textarea className="Password" rows="1" placeholder="Password" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

function HomePage({ match }) {
  return (
    <body>
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
      <div>
        <img src={Image} ALT="Danmachi" width="114" height="148" />
      </div>
    </body>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default Login;



