import { loadUsers, loadUsersFail, loadUsersSuccess } from '../actions/feature.actions';
import { initialState } from '../feature.state';
import { featureReducer } from './feature.reducers';

describe('Feature Reducer', () => {
  it('should start loading', () => {
    const action = loadUsers();
    const result = featureReducer(initialState, action);

    expect(result).toEqual({ ...initialState, isLoading: true });
  });

  it('should add users and stop loading', () => {
    const users = [{ id: 1, name: 'name' }];
    const action = loadUsersSuccess({ entities: users });
    const result = featureReducer(initialState, action);

    expect(result).toEqual({ ...initialState, entities: users, isLoading: false });
  });

  it('should stop loading', () => {
    const action = loadUsersFail();
    const result = featureReducer(initialState, action);

    expect(result).toEqual({ ...initialState, isLoading: false });
  });
});
