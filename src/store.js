import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';

export default function createStore(history, data) {
    // Sync dispatched route actions to the history
    const reduxRouterMiddleware = routerMiddleware(history);

    const middleware = [reduxRouterMiddleware, promise(), logger()];

    let finalCreateStore;
    if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
        const { persistState } = require('redux-devtools');
        const DevTools = require('./containers/DevTools/DevTools');
        finalCreateStore = compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
        )(_createStore);
    } else {
        finalCreateStore = applyMiddleware(...middleware)(_createStore);
    }

    const reducer = require('./reducers');
    const store = finalCreateStore(reducer, data);

    if (__DEVELOPMENT__ && module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(require('./reducers'));
        });
    }

    return store;
}
