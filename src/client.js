import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';

import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import getRoutes from './routes';

const _browserHistory = useScroll(() => browserHistory)();
const dest = document.getElementById('content');
const store = createStore(_browserHistory, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(_browserHistory, store);

ReactDOM.render(
  	<Provider store={store}>
  	  	<Router children={getRoutes(store)} history={history}/>
  	</Provider>, dest
);
