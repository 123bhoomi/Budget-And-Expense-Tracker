import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client'

import App from './App';
import './index.css';

import { Provider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <SpeechProvider appId="52b7b897-5a9d-4fdb-9cfc-b86b7a1c6e2b" language="en-US">
        <Auth0Provider
        domain="dev-7sqaoatp6mpla2bk.us.auth0.com"
        clientId="PjTRQX1P55OGQIdAIjoO5TSdRg4nJp6i"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}>    
            <Provider>
            <App />
            </Provider>
        </Auth0Provider>
    </SpeechProvider>,
    document.getElementById('root')
);