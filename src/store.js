import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleWare from 'redux-promise-middleware'

import user from './ducks/user'

export default createStore(user, {}, applyMiddleware(promiseMiddleWare()))