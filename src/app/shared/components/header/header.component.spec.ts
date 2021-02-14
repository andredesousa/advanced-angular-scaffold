import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from '../button/button.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, HeaderComponent],
    }).compileComponents();
  });

  it('should match with the snapshot', () => {
    const fixture = TestBed.createComponent(HeaderComponent);

    expect(fixture).toMatchSnapshot();
  });
});
