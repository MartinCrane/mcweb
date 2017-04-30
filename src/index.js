import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router';
import { ConnectedApp } from './App';
import { ConnectedLogo } from './components/Logo';
import { ConnectedTitleContainer }   from './components/TitleContainer';
import { portfolioData }   from './data/portfolio.js';
import About  from './components/About';
import './index.css';


const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store)
store.dispatch({type: "LOAD_PORTFOLIO", payload: portfolioData})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={ConnectedApp}>
          <Route path="/" component={ConnectedLogo} />
          <Route path="logo" component={ConnectedLogo} />
          <Route path="titles" component={ConnectedTitleContainer} />
          <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
