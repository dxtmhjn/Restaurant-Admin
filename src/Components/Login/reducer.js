/**
* User Reducer
*/
import initialState from '../../store/initialState'
import * as types from './actions'
import {CheckUserAuthenticated} from './Helper';


export default function AuthenticationReducer(state = initialState.usertoken, action) {
  switch (action.type) {
    case types.CHECK_CREDENTIALS:
    return {
      ...state,
      posts: action.posts
    } 
    case types.CHECK_CREDENTIALS_SUCCESS:
      return {
        ...state,
        posts: action.posts
      } 
    default:
      return state
  }
}