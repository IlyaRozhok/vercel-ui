import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import store from "store/store"
import {BrowserRouter} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_ISSUER_BASE_URL}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            authorizationParams={{redirect_uri: window.location.origin}}
        >
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </Auth0Provider>,
    </React.StrictMode>
);