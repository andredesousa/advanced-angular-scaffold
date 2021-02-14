import { ActionTypes, loadUsers, loadUsersFail, loadUsersSuccess } from './feature.actions';

describe('Feature actions', () => {
  it(`should create an action ${ActionTypes.LOAD_USERS}`, () => {
    const action = loadUsers();

    expect(action).toEqual({
      type: ActionTypes.LOAD_USERS,
    });
  });

  it(`should create an action ${ActionTypes.LOAD_USERS_SUCCESS}`, () => {
    const action = loadUsersSuccess({ entities: [] });

    expect(action).toEqual({
      type: ActionTypes.LOAD_USERS_SUCCESS,
      entities: [],
    });
  });

  it(`should create an action ${ActionTypes.LOAD_USERS_FAIL}`, () => {
    const action = loadUsersFail();

    expect(action).toEqual({
      type: ActionTypes.LOAD_USERS_FAIL,
    });
  });
});
