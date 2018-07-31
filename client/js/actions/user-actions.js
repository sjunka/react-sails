import $ from 'jquery';

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      user: 'Error no user from API CALL - Please type the newUser'
    }
  };
}

export function apiRequest() {

  return (dispatch) => {
    $.ajax({
      url: 'http://www.google.com',
      success(response) {
        console.log('Bien');
        /* Example for API
        dispatch(updateUSer(response.newUser));
        */
      },
      error() {
        console.log('Error: Redux: API call failed');
        dispatch(showError());
      }
    });
  };
}
