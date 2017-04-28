import {combineReducers} from 'redux'
import mouseReducer from './mouseReducer'

export default combineReducers({
  mouse: mouseReducer
})
