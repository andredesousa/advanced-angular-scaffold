import { createReducer, on, Action } from '@ngrx/store';

import { loadUsers, loadUsersSuccess, loadUsersFail } from '../actions/feature.actions';
import { FeatureState, initialState } from '../feature.state';

const reducer = createReducer(
  initialState,
  on(loadUsers, state => ({
    ...state,
    isLoading: true,
  })),
  on(loadUsersSuccess, (state, { entities }) => ({
    ...state,
    entities,
    isLoading: false,
  })),
  on(loadUsersFail, state => ({
    ...state,
    isLoading: false,
  })),
);

export function featureReducer(state: FeatureState, action: Action): FeatureState {
  return reducer(state, action);
}
