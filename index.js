/*eslint-env node*/

'use strict';

let React = require('react');
let AppView = require('./AppView.jsx');

let myAppView = React.render(
    React.createElement(AppView),
    document.getElementById('app')
);
