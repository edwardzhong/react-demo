import React from 'react'
import {render} from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {BrowserRouter,HashRouter,hashHistory, Route, Link } from 'react-router-dom'//4.0版本之后
import logger from 'redux-logger'
import rootReducer from './reducers'
import loadSagas from './sagas'
import CommentApp from './containers/CommentApp'
import About from './containers/About'
import Home from './containers/Home'
import './less/main.less'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware,logger)
);
sagaMiddleware.run(loadSagas);

render(
  <Provider store={store}>
    <HashRouter history={hashHistory}>
      <div>
        <Route exact path="/" component={CommentApp} />
        <Route path="/about" component={About} />
        <Route path="/home/:id" component={Home} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)