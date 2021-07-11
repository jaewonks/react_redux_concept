import { combineReducers } from 'redux'
import commentsReducer from './comments/reducer.js'
import subscribersReducer from './subscribers/reducer.js'
import viewReducer from './views/reducer.js'

const rootReducer = combineReducers({
  view: viewReducer,
  subscribers: subscribersReducer,
  comments: commentsReducer
})

export default rootReducer