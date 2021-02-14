import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';
import { PageComponent } from './page.component';

describe('PageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, PageComponent],
    }).compileComponents();
  });

  it('should match with the snapshot', () => {
    const fixture = TestBed.createComponent(PageComponent);

    expect(fixture).toMatchSnapshot();
  });
});
