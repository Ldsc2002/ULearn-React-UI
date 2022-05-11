import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import './style/app.css'
import './style/book.css'
import './style/calendar.css'
import './style/index.css'
import './style/login.css'
import './style/mui.min.css'
import './style/palette.css'
import './style/popUp.css'
import './style/styles.css'


ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

