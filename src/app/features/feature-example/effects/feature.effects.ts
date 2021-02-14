import { Injectable } from '@angular/core';
import { UsersService } from '@api/users/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { loadUsers, loadUsersFail, loadUsersSuccess } from '../actions/feature.actions';

@Injectable()
export class FeatureEffects {
  @Effect()
  listUsers$ = this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() =>
      this.users.listUsers().pipe(
        map(entities => loadUsersSuccess({ entities })),
        catchError(() => of(loadUsersFail())),
      ),
    ),
  );

  constructor(private readonly actions$: Actions, private readonly users: UsersService) {}
}
