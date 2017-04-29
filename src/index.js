import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { ConnectedApp } from './App';
import { ConnectedLogo } from './components/Logo';
import TitleContainer   from './components/TitleContainer';
import About  from './components/About';
import './index.css';


const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={ConnectedApp}>
          <Route path="/" component={ConnectedLogo} />
          <Route path="logo" component={ConnectedLogo} />
          <Route path="titles" component={TitleContainer} />
          <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
