import { combineReducers } from '@reduxjs/toolkit';
import auth from 'app/auth/store';
import results from 'app/store/app/resultsSlice';
import enterprising from 'app/store/app/enterprisingSlice';
import fuse from './fuse';
import i18n from './i18nSlice';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    fuse,
    i18n,
    ...asyncReducers,
    results,
    enterprising,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === 'auth/user/userLoggedOut') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
