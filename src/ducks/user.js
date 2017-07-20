import axios from 'axios'
const initialState = {
  name: '',
  user: {},
  fetching: false,
  error: null
}

const ADD_NAME = 'ADD_NAME'
const GET_DATA = 'GET_DATA'
const GET_DATA_PENDING = 'GET_DATA_PENDING'
const GET_DATA_FULFILLED = 'GET_DATA_FULFILLED'
const GET_DATA_REJECTED = 'GET_DATA_REJECTED'

// action creators the user can call
export function addName(name) {
  return {
    type: ADD_NAME,
    payload: name
  }
}
export function getData() {
}

//makes the changes based on what the user does
export default function userReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_NAME:
      let newState = Object.assign({}, state, {name: action.payload})
      return newState
    default:
      return state
  }
}
