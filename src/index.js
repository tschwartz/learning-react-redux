import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './style.css';

import App from './components/App';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

const router = (
    <Provider store={ store }>
        <App />
    </Provider>
);

render(
    router,
    document.getElementById('root')
);
registerServiceWorker();
