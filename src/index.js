/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// eslint-disable-next-line no-unused-expressions



serviceWorker.unregister();
