import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import App from './App';
import Home from './modules/home';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import AppState from './AppState.js';
import ArticlesService from './services/articles.js';

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const state = new AppState(routingStore);

export default (
     <Provider {...state}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
            </Route>
            <Route path="*" component={() => <h1>No Match!</h1>}/>
        </Router>
    </Provider>
)