import axios from 'axios'
const initialState = {
   name: "",
   character: {},
   fetching: false,
   error: null
}

const ADD_NAME = 'ADD_NAME'
const GET_DATA = 'GET_DATA'
const GET_DATA_PENDING = 'GET_DATA_PENDING'
const GET_DATA_FULFILLED = 'GET_DATA_FULFILLED'
const GET_DATA_REJECTED = 'GET_DATA_REJECTED'

export function addName(name) {
   return {
      type: ADD_NAME,
      name: name
   }
}
export function getData() {
   return {
      type: GET_DATA,
      payload: axios.get('http://swapi.co/api/people/1')
   }
}

export default function userReducer(state=initialState, action) {
   switch(action.type) {
      case ADD_NAME:
         return Object.assign({}, state, {})
      case GET_DATA_PENDING:
         return Object.assign({}, state, {fetching: true})
      case GET_DATA_FULFILLED:
         return Object.assign({}, state, {fetching: false, character: action.payload.data})
      case GET_DATA_REJECTED:
         return Object.assign({}, state, {fetching: false, error: action.payload})
      default:
         return initialState
   }
}