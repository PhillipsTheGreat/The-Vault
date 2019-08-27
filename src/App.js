import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <html lang="en">
      <title>
        The Vault
      </title>
      <body>
        <div id="root">
          <div className ="Page">
            <div className="App">
              <div className="App-header">
                <p class="title">
                  Welcome To The Vault
                </p>
              </div>
              <div class="Main">
                  <div class="Login">
                    <div>
                      <textarea className ="Username" rows="1" placeholder="Username"></textarea>
                    </div>
                    <div>
                      <textarea className ="Password" rows="1" placeholder="Password"></textarea>
                    </div>
                    <Router>
                      <Link to="/topics">
                        <button className ="Enter">Enter The Vault</button>
                      </Link>
                    </Router>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}


export default App;



