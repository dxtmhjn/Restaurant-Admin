/**
 * User Reducer
 */
import initialState from '../../store/initialState'
import * as types from './actions'

import _ from "lodash";

export function AuthenticationReducer(state = initialState, action) {
  switch (action.type) {

    case types.CHECK_CREDENTIALS:
      
      return {
        ...state,
        isloading :action.isloading

      }
      case types.CHECK_CREDENTIALS_SUCCESS:
     
      return {
        ...state,
        usertoken: action.payload
      }
    default:
      return state
  }
}
