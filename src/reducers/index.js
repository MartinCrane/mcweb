import {combineReducers} from 'redux'
import mouseReducer from './mouseReducer'
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  mouse: mouseReducer,
  routing: routerReducer
})
