import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@api/users/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadUsers } from '../actions/feature.actions';
import { selectResults } from '../selectors/feature.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(selectResults);
  }
}
