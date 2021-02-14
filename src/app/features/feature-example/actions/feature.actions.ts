import { User } from '@api/users/models';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  LOAD_USERS = '[Feature] Load users data',
  LOAD_USERS_SUCCESS = '[Feature] Users data was fetched successfully',
  LOAD_USERS_FAIL = '[Feature] Fetching users data failed',
}

export const loadUsers = createAction(ActionTypes.LOAD_USERS);

export const loadUsersSuccess = createAction(ActionTypes.LOAD_USERS_SUCCESS, props<{ entities: User[] }>());

export const loadUsersFail = createAction(ActionTypes.LOAD_USERS_FAIL);
