import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from './feature-routing.module';

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should be able to navigate', async () => {
    await router.navigateByUrl('');

    expect(location.path()).toBe('/');
  });
});
