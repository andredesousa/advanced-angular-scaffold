import { APP_BASE_HREF, Location } from '@angular/common';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app.module';

jest.mock('@ngrx/effects', () => ({
  ...jest.requireActual('@ngrx/effects'),
  EffectsModule: { forRoot: () => [], forFeature: () => [] },
}));

jest.mock('@ngrx/store', () => ({
  ...jest.requireActual('@ngrx/store'),
  StoreModule: { forRoot: () => [], forFeature: () => [] },
}));

jest.mock('../environments/environment', () => ({
  ...jest.requireActual('../environments/environment'),
  ExternalModules: [],
}));

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, AppRoutingModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '' }],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to the main page', async () => {
    await router.navigateByUrl('');

    expect(location.path()).toBe('');
  });

  it('should navigate to the users page', async () => {
    await router.navigateByUrl('users');

    expect(location.path()).toBe('/users');
  });

  it('should redirect to the main page', async () => {
    await router.navigateByUrl('not-found');

    expect(location.path()).toBe('');
  });
});
