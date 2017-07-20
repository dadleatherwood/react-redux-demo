import {createStore, combineReducers, applyMiddleware} from 'redux'
// import promiseMiddleWare from 'redux-promise-middleware'

//import reducer
import user from './ducks/user'
export default createStore(user)
