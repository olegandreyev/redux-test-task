
import './styles/styles.scss'

import React from 'react'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {render as renderComponent} from 'react-dom'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as reducers from './reducers'
import { App, Clients } from './containers'

const loggerMiddleware = createLogger();
const rrMiddleware = routerMiddleware(browserHistory);
const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    compose(
        applyMiddleware(thunkMiddleware,rrMiddleware,loggerMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();
renderComponent(
    <Provider store={store}>
        <Router location="history" history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Clients}/>
            </Route>
        </Router>
    </Provider>
,document.getElementById('app'));
