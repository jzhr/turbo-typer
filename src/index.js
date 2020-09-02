import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Leaderboard from './components/Leaderboard';
import * as serviceWorker from './serviceWorker';
import './App.css';
import './components/component.css';

ReactDOM.render(
  <React.StrictMode>
    <App></App>
    <Leaderboard />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
