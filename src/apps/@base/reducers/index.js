/**
 *
 * Common related reducers
 *
 */
import { combineReducers } from 'redux';
import languageReducer from './languageReducer';

export const common = () =>
  combineReducers({
    languageReducer,
  });
