import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider, useDispatch } from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./reduxController/reducers/rootReducer";
import {setCurrentUser} from "./reduxController/actions/userActions";
import {setAuthorisationToken} from "./APIHandler/APIController";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create the redux store
const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
