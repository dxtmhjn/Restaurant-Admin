/**
 * User Action Types
 */

import {
    CheckUserAuthenticated
} from './Helper';

export const CHECK_CREDENTIALS = 'CHECK_CREDENTIALS';
export const CHECK_CREDENTIALS_SUCCESS = 'CHECK_CREDENTIALS_SUCCESS';
export const FETCH_RESTAURANT = 'FETCH_RESTAURANT';
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


export function fetchRestaurants(cred) {
    return {
        type: FETCH_RESTAURANT,
        payload: cred
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