/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../utility';
/**
 *
 * Import All App Related Reducers.
 */
import { common } from '../apps/common/reducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    router: connectRouter(history),
    common,
  });

  return rootReducer;
}
