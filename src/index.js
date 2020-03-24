// react
import React from 'react';

// third-party
import ReactDOM from 'react-dom';

// application
import * as serviceWorker from './serviceWorker';

// views
import Root from './Root';

// styles
import './content/css/scss/theme.min.css';


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
