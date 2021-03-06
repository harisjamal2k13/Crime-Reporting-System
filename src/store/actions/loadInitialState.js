import ActionTypes from './actionTypes';

export function loadInitialState() {
  return dispatch => {
    dispatch(loadInitialStateAction())
  }
}

function loadInitialStateAction() {
  return {
    type: ActionTypes.LoadInitialState
  };
}

function LoginRequestSuccess(data) {
    return {
        type: ActionTypes.LoginRequestSuccess,
        data
    };
}