import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import App from './App';
import Home from './modules/home';
import Article from './modules/article';
import Filter from './modules/filter';
import News from './modules/news';

import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import ArticlesService from './services/articles.js';
import AppState from './AppState.js';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const appState = new AppState(routingStore);

export default (
    <MuiThemeProvider>
     <Provider appState={appState}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute name="home" component={Home}/>
                <Route name="article" component={Article} path="article/:articleId"></Route>
                <Route name="filter" component={Filter} path="filter"></Route>
                <Route name="news" component={News} path="news"></Route>
            </Route>
          <Route path="/news" component={News} />
            <Route path="*" component={() => <h1>No Match!</h1>}/>
        </Router>
    </Provider>
    </MuiThemeProvider>
)