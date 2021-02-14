import { UsersService } from '@api/users/services';
import { Actions } from '@ngrx/effects';
import { hot } from 'jest-marbles';
import { of, throwError } from 'rxjs';

import { FeatureEffects } from './feature.effects';
import { loadUsers, loadUsersSuccess, loadUsersFail } from '../actions/feature.actions';

describe('FeatureEffects', () => {
  let actions$: Actions;
  let effects: FeatureEffects;
  let users: UsersService;

  describe('When the service returns data', () => {
    beforeEach(() => {
      users = { listUsers: () => of([]) } as UsersService;
      actions$ = hot('--a-', { a: loadUsers() });
      effects = new FeatureEffects(actions$, users);
    });

    it('should dispatch a success action', () => {
      const expected = hot('--s-', { s: loadUsersSuccess({ entities: [] }) });

      expect(effects.listUsers$).toBeObservable(expected);
    });
  });

  describe('When the service returns an error', () => {
    beforeEach(() => {
      users = ({ listUsers: () => throwError(new Error('Oops!')) } as unknown) as UsersService;
      actions$ = hot('--a-', { a: loadUsers() });
      effects = new FeatureEffects(actions$, users);
    });

    it('should dispatch an error action', () => {
      const expected = hot('--e-', { e: loadUsersFail() });

      expect(effects.listUsers$).toBeObservable(expected);
    });
  });
});
