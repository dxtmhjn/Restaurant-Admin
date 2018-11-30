/**
* User Action Types
*/

export const CHECK_CREDENTIALS = 'CHECK_CREDENTIALS';
export const CHECK_CREDENTIALS_SUCCESS = 'CHECK_CREDENTIALS_SUCCESS';

export function checkCredentials(cred) {
    return { type: CHECK_CREDENTIALS, cred}
  }
export function checkCredentialsSuccess(cred) {
  return { type: CHECK_CREDENTIALS_SUCCESS, cred}
}