import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Authorization} from 'features/authorization'
import {SWRConfig} from 'swr'


import {App} from "app";
import {api} from 'shared/api';
import {AxiosRequestConfig} from "axios";


ReactDOM.render(
    <React.StrictMode>
        <Authorization>
            <BrowserRouter>
                <SWRConfig
                    value={{
                        fetcher: (url: string, config?: AxiosRequestConfig) =>
                            api.get(url, config).then((response) => response.data),
                    }}
                >
                    <App/>
                </SWRConfig>
            </BrowserRouter>
        </Authorization>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
