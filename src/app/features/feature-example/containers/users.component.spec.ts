import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jest-marbles';

import { featureKey, initialState } from '../feature.state';
import { loadUsers } from '../actions/feature.actions';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [provideMockStore({ initialState: { [featureKey]: initialState } })],
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {
      spyOn(store, 'dispatch');
      component.ngOnInit();
    });

    it('should call "dispatch" method', () => {
      expect(store.dispatch).toHaveBeenCalledWith(loadUsers());
    });

    it('should set users$ attribute', () => {
      expect(component.users$).toBeObservable(cold('a', { a: [] }));
    });
  });
});
