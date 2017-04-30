import {combineReducers} from 'redux'
import mouseReducer from './mouseReducer'
import screenReducer from './screenReducer'
import portfolioReducer from './portfolioReducer'
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  mouse: mouseReducer,
  routing: routerReducer,
  portfolio: portfolioReducer,
  screen: screenReducer
})
