/**
 * User Action Types
 */

import 
    {CheckUserAuthenticated ,fetchRestaurant,getAlluser} from './Helper';

export const CHECK_CREDENTIALS = 'CHECK_CREDENTIALS';
export const CHECK_CREDENTIALS_SUCCESS = 'CHECK_CREDENTIALS_SUCCESS';
export const FETCH_RESTAURANT = 'FETCH_RESTAURANT';
export const FETCH_RESTAURANT_SUCCESS ='FETCH_RESTAURANT_SUCCESS';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS ='GET_USERS_SUCCESS';


export function checkCredentials(isloading) {
    return {
        type: CHECK_CREDENTIALS,
        isloading
    };
}

export function checkCredentialsSuccess(cred) {
    return {
        type: CHECK_CREDENTIALS_SUCCESS,
        payload: cred
    };
}


export function fetchRestaurantsList(cred) {
    return {
        type: FETCH_RESTAURANT,
        payload: cred
    };
}
export function fetchRestaurantsListSuccess(resList) {
    return {
        type: FETCH_RESTAURANT_SUCCESS,
        payload: resList
    };
}

export function fetchUsers(isloading) {
    return {
        type: GET_USERS,
        isloading
    };
}

export function fetchUsersSuccess(user) {
    return {
        type: GET_USERS_SUCCESS,
        payload: user
    };
}
export function Authenticate(obj) {
    return (dispatch) => {
        dispatch(checkCredentials());
        CheckUserAuthenticated(obj).then(res => {
            if (res) {
                dispatch(checkCredentialsSuccess(res));
                
                dispatch(fetchRestaurants(res));
            }
        });
    }

}

export function fetchRestaurants(obj) {
    return (dispatch) => {
        dispatch(fetchRestaurantsList());
        fetchRestaurant().then(res => {
            if (res) {
                dispatch(fetchAllUser());
                dispatch(fetchRestaurantsListSuccess(res));
               
            }
        });
    }

}

export function fetchAllUser() {
    return (dispatch) => {
        dispatch(fetchUsers());
        getAlluser().then(res => {
            if (res) {
              
                dispatch(fetchUsersSuccess(res));
            }
        });
    }

}