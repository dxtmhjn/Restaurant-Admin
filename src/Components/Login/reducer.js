/**
 * User Reducer
 */
import initialState from '../../store/initialState'
import * as types from './actions'
import Cookies from 'js-cookie';
import _ from "lodash";

export function AuthenticationReducer(state = initialState, action) {
  switch (action.type) {

    case types.CHECK_CREDENTIALS:
      
      return {
        ...state,
        isloading :true

      }
      case types.CHECK_CREDENTIALS_SUCCESS:
      Cookies.set('userrole', (action.payload && action.payload.data && action.payload.data.role?action.payload.data.role :"NOROLE"), { expires: 1 });
      return {
        ...state,
        isloading :false,
        usertoken: action.payload
      }

      case types.FETCH_RESTAURANT:
      
      return {
        ...state,
        isloading :action.isloading

      }
      case types.FETCH_RESTAURANT_SUCCESS:
     
      return {
        ...state,
        restaurant :transformToRestaurantModel(action.payload)
      }
      case types.GET_USERS:
      
      return {
        ...state,
        isloading :action.isloading

      }
      case types.GET_USERS_SUCCESS:
     
      return {
        ...state,
        users :transformToUserModel(action.payload)
      }
    default:
      return state
  }
}


const transformToRestaurantModel =(data)=>{
  var list =[];

  if(data && data.data &&  data.data.length >0){
    data.data.forEach(element => {
       list.push(element.value);
     });
  }
  return list;
}

const transformToUserModel =(data)=>{
  var list =[];

  if(data && data.data &&  data.data.length >0){
    data.data.forEach(element => {
       list.push(element.value);
     });
  }
  return list;
}