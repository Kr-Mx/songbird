import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store.js";
import './index.scss';
import 'normalize.css/normalize.css';


ReactDOM.render(<App store={store}/>, document.getElementById('root'));


