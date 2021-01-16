import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { rootReducer } from './redux/rootReducer.js';
import App from './App.js';
import './styles/index.scss';

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(app, document.getElementById('app'))
