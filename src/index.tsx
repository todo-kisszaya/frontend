import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Authorization} from 'features/authorization'

import {App} from "app";


ReactDOM.render(
    <React.StrictMode>
        <Authorization>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Authorization>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
