import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { ConnectedApp } from './App';
import { ConnectedLogo } from './components/Logo';
import { ConnectedBlogContainer } from './components/Blog/BlogContainer';
import NewBlog from './components/Blog/NewBlog';
import { ConnectedTitleContainer } from './components/TitleContainer';
import { portfolioData } from './data/portfolio.js';
import { blogData } from './data/blog.js';
import About from './components/About';
import { Login } from './components/account/Login';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store)
store.dispatch({type: "LOAD_PORTFOLIO", payload: portfolioData})
store.dispatch({type: "LOAD_BLOG", payload: blogData.reverse()})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={ConnectedApp}>
        <Route path="/" component={ConnectedLogo} />
        <Route path="logo" component={ConnectedLogo} />
        <Route path="news" component={ConnectedBlogContainer} />
        <Route path="newblog" component={NewBlog} />
        <Route path="login" component={Login} />
        <Route path="titles" component={ConnectedTitleContainer} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
