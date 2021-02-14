import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  it('should return an array of CSS classes with "app-button--primary"', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;

    component.primary = true;

    expect(component.classes).toEqual(['app-button', 'app-button--medium', 'app-button--primary']);
  });

  it('should return an array of CSS classes with "app-button--secondary"', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;

    expect(component.classes).toEqual(['app-button', 'app-button--medium', 'app-button--secondary']);
  });

  it('should match with the snapshot', () => {
    const fixture = TestBed.createComponent(ButtonComponent);

    expect(fixture).toMatchSnapshot();
  });
});
