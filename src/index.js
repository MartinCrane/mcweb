import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { ConnectedApp } from './App';
import { ConnectedLogo } from './components/Logo/LogoNoon';
import { ConnectedLibraryContainer } from './components/Library/LibraryContainer';
import PlaylistPlayer  from './components/Library/PlaylistPlayer';
import { ConnectedBlogContainer } from './components/Blog/BlogContainer';
import { ConnectedTitleContainer } from './components/Portfolio/TitleContainer';
import { ConnectedWebContainer } from './components/Web/WebContainer';
import Title from './components/Portfolio/Title';
import {ConnectedPost} from './components/Blog/Post';
import NewBlog from './components/Blog/NewBlog';
import { portfolioData } from './data/portfolio.js';
import { blogData } from './data/blog.js';
import About from './components/About';
import Quartets from './components/Library/Quartets';
import Access from './components/Library/Access';
import { Login } from './components/account/Login';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch({type: "LOAD_PORTFOLIO", payload: portfolioData})
store.dispatch({type: "LOAD_BLOG", payload: blogData.reverse()})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={ConnectedLogo} />
      <Route path="quartets" component={Quartets} />
      <Route path="access" component={Access} />
      <Route component={ConnectedApp}>
        <Route path="logo" component={ConnectedLogo} />
        <Route path="library" component={ConnectedLibraryContainer} />
        <Route path="news" component={ConnectedBlogContainer}>
          <Route path=":postName" component={ConnectedPost} />
        </Route>
        <Route path="newblog" component={NewBlog} />
        <Route path="login" component={Login} />
        <Route path="work" component={ConnectedTitleContainer} >
          <Route path=":titleName" component={Title} />
        </Route>
        <Route path="about" component={About} />
      </Route>

      <Redirect from='*' to='/' />

    </Router>
  </Provider>,
  document.getElementById('root')
)
