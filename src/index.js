import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Leaderboard from './components/Leaderboard';
import * as serviceWorker from './serviceWorker';
// import Toolbar from '@material-ui/core/Toolbar';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';

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
