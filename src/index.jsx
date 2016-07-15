import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// import './../styles/app.scss';
import './app.js';
import reducer from './reducer';
import remoteActionMiddleware from './remote_action_middleware';

import {AppContainer} from './components/App';
import {SelectedEpisodeContainer} from './components/SelectedEpisode';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
const createStoreWithMiddleWare = applyMiddleware(
  remoteActionMiddleware
)(createStoreDevTools);
const store = createStoreWithMiddleWare(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    sortedEpisodes: [],
    selectedEpisode: {}
  }
});

const routes = <Route>
  <Route path="/" component={AppContainer} />
    <Route path="selectedEpisode" component={SelectedEpisodeContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

