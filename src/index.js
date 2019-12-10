import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './include/bootstrap'
import {BrowserRouter} from "react-router-dom"; // responsavel por conter toda a interface da applicacao em que as rotas serao utilizadas


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
document.getElementById('root'));
serviceWorker.unregister();
